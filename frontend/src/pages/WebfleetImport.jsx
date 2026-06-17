import { useMemo, useState } from 'react';
import { read, utils } from 'xlsx';
import UploadDropzone from '../components/UploadDropzone';
import PageHeader from '../components/PageHeader';
import PremiumCard from '../components/PremiumCard';
import DataTable from '../components/DataTable';
import EmptyState from '../components/EmptyState';
import { uploadWebfleet } from '../services/api';

const previewHeaders = ['Conduite', 'Travail', 'Repos', 'Disponibilité', 'Heure de début', 'Heure de fin'];

const previewColumns = previewHeaders.map((header) => ({
  header,
  accessor: (row) => row[header] ?? row[header.toLowerCase()] ?? '',
}));

export default function WebfleetImport() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [previewRows, setPreviewRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPreview = async (selectedFile) => {
    if (!selectedFile) {
      setPreviewRows([]);
      return;
    }

    try {
      const data = await selectedFile.arrayBuffer();
      const workbook = read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = utils.sheet_to_json(sheet, { header: 1, defval: '' });
      const headers = rows[0] || [];
      const parsed = rows.slice(1, 6).map((row) => {
        const rowObject = {};
        headers.forEach((cell, index) => {
          rowObject[cell] = row[index] ?? '';
        });
        return rowObject;
      });
      setPreviewRows(parsed);
    } catch (err) {
      setPreviewRows([]);
    }
  };

  const handleSelectFile = (selectedFile) => {
    setError(null);
    setResult(null);
    setFile(selectedFile);
    loadPreview(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await uploadWebfleet(formData);
      setResult(response.data);
    } catch (e) {
      setError('Impossible de joindre le backend ou le fichier est invalide.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Import Webfleet"
        description="Chargez votre rapport Excel puis consultez les totaux de conduite, travail et repos calculés automatiquement."
        badge="Import"
      />

      <UploadDropzone file={file} onSelectFile={handleSelectFile} onUpload={handleUpload} loading={loading} />

      {error ? (
        <div className="rounded-[32px] border border-red-200 bg-red-50 p-5 text-sm text-red-700">{error}</div>
      ) : null}

      {result ? (
        <PremiumCard
          title="Résultat de l'import"
          description="Synthèse claire et professionnelle des totaux calculés par le backend."
        >
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Conduite', value: result.totals?.conduiteHeures ?? '-' },
              { label: 'Travail', value: result.totals?.travailHeures ?? '-' },
              { label: 'Heures travaillées', value: result.totals?.heuresTravaillees ?? '-' },
              { label: 'Repos', value: result.totals?.reposHeures ?? '-' },
              { label: 'Disponibilité', value: result.totals?.disponibiliteHeures ?? '-' },
              { label: 'Total', value: result.totals?.totalHeures ?? '-' },
            ].map((item) => (
              <div key={item.label} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 transition hover:border-orange-200">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </PremiumCard>
      ) : null}

      <PremiumCard title="Aperçu du fichier" description="Affichez un extrait des premières lignes de votre rapport importé.">
        {previewRows.length ? (
          <DataTable columns={previewColumns} data={previewRows} rowKey={(row, index) => index} />
        ) : (
          <EmptyState
            title="Aucun aperçu disponible"
            description="Sélectionnez un fichier Webfleet pour voir ses premières lignes ici." 
            icon="📄"
          />
        )}
      </PremiumCard>
    </div>
  );
}
