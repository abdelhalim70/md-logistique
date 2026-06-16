import { useMemo, useState } from 'react';
import { read, utils } from 'xlsx';
import UploadZone from '../components/UploadZone';
import { uploadWebfleet } from '../services/api';

const previewHeaders = ['Conduite', 'Travail', 'Repos', 'Disponibilité', 'Heure de début', 'Heure de fin'];

export default function WebfleetImport() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [previewRows, setPreviewRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previewTable = useMemo(() => {
    if (!previewRows.length) {
      return null;
    }
    return (
      <div className="overflow-x-auto rounded-[32px] border border-slate-200 bg-white p-4 shadow-soft">
        <table className="min-w-full table-auto text-left text-sm text-slate-700">
          <thead>
            <tr>
              {previewHeaders.map((header) => (
                <th key={header} className="border-b border-slate-200 px-4 py-3 font-medium text-slate-500">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {previewRows.map((row, index) => (
              <tr key={index} className="odd:bg-slate-50">
                {previewHeaders.map((header) => (
                  <td key={header} className="border-b border-slate-200 px-4 py-3">
                    {row[header] ?? row[header.toLowerCase()] ?? ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }, [previewRows]);

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
      <UploadZone file={file} onSelectFile={handleSelectFile} onUpload={handleUpload} loading={loading} />

      {error ? (
        <div className="rounded-[32px] border border-red-200 bg-red-50 p-5 text-sm text-red-700">{error}</div>
      ) : null}

      {result ? (
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">Résultat de l'import</h2>
          <p className="mt-2 text-sm text-slate-500">Totaux calculés par le backend.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Conduite', value: result.totals?.conduiteHeures ?? '-'},
              { label: 'Travail', value: result.totals?.travailHeures ?? '-'},
              { label: 'Heures travaillées', value: result.totals?.heuresTravaillees ?? '-'},
              { label: 'Repos', value: result.totals?.reposHeures ?? '-'},
              { label: 'Disponibilité', value: result.totals?.disponibiliteHeures ?? '-'},
              { label: 'Total', value: result.totals?.totalHeures ?? '-'},
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Aperçu du fichier</p>
            <h2 className="text-xl font-semibold text-slate-900">Premières lignes</h2>
          </div>
          <span className="rounded-full bg-orange-100 px-3 py-2 text-sm font-semibold text-mdorange">5 lignes</span>
        </div>

        <div className="mt-6">
          {previewTable ?? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
              Sélectionnez un fichier pour afficher les premières lignes.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
