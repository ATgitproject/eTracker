import { useRef, useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import { Icon } from '../../config/iconRegistry.jsx';
import { useTransactionStore } from '../../store/useTransactionStore';
import './ImportModal.scss';

/**
 * ImportModal
 * ------------------------------------------------------------------
 * Opened from the Navbar's "Import Statement" button. Accepts a CSV
 * bank statement, uploads it via useTransactionStore.importStatement
 * (which POSTs to /api/import/statement), and shows upload progress
 * + a result summary. On success, the dashboard's tiles/chart/list
 * refresh automatically because importStatement re-runs fetchAll().
 * ------------------------------------------------------------------
 */
export default function ImportModal({ onClose }) {
  const importStatement = useTransactionStore((s) => s.importStatement);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | uploading | success | error
  const [message, setMessage] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const pickFile = (f) => {
    if (!f) return;
    setFile(f);
    setStatus('idle');
    setMessage('');
  };

  const handleUpload = async () => {
    if (!file) return;
    setStatus('uploading');
    setProgress(0);
    try {
      const result = await importStatement(file, setProgress);
      setStatus('success');
      setMessage(result.message);
    } catch (err) {
      setStatus('error');
      setMessage(err.response?.data?.message || 'Import failed. Please check the file format and try again.');
    }
  };

  return (
    <Modal title="Import Bank Statement" onClose={onClose}>
      <div className="import-modal">
        <p className="import-modal__hint">
          Upload a CSV export from your bank. We'll match columns like date, description, debit/credit
          automatically and add every transaction to your dashboard.
        </p>

        <div
          className={`import-modal__dropzone${dragOver ? ' is-dragover' : ''}${file ? ' has-file' : ''}`}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            pickFile(e.dataTransfer.files?.[0]);
          }}
        >
          <Icon name="upload-cloud" size={30} />
          {file ? (
            <span className="import-modal__filename">{file.name}</span>
          ) : (
            <>
              <span>Click to browse or drag a .csv file here</span>
              <span className="import-modal__sub">Max file size 5MB</span>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept=".csv"
            hidden
            onChange={(e) => pickFile(e.target.files?.[0])}
          />
        </div>

        {status === 'uploading' && (
          <div className="import-modal__progress">
            <div className="import-modal__progress-bar" style={{ width: `${progress}%` }} />
          </div>
        )}

        {message && (
          <p className={`import-modal__message import-modal__message--${status}`}>{message}</p>
        )}

        <div className="import-modal__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            {status === 'success' ? 'Done' : 'Cancel'}
          </button>
          <button
            type="button"
            className="btn btn--primary"
            disabled={!file || status === 'uploading'}
            onClick={handleUpload}
          >
            {status === 'uploading' ? `Uploading… ${progress}%` : 'Import Transactions'}
          </button>
        </div>
      </div>
    </Modal>
  );
}
