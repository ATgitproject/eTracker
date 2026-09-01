import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import FloatingAddButton from '../FloatingAddButton/FloatingAddButton.jsx';
import TransactionModal from '../TransactionModal/TransactionModal.jsx';
import ImportModal from '../ImportModal/ImportModal.jsx';
import './AppLayout.scss';

/**
 * AppLayout
 * ------------------------------------------------------------------
 * The persistent chrome around every authenticated page: sidebar +
 * navbar + the floating "add transaction" button + the two modals
 * they open. Keeping modal open/close state here (rather than inside
 * Navbar/FloatingAddButton) means any future page can trigger them
 * too, e.g. an empty-state "Import your first statement" CTA.
 * ------------------------------------------------------------------
 */
export default function AppLayout({ children }) {
  const [isImportOpen, setImportOpen] = useState(false);
  const [isAddOpen, setAddOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-layout__main">
        <Navbar onImportClick={() => setImportOpen(true)} />
        <div className="app-layout__content">{children}</div>
      </div>

      <FloatingAddButton onClick={() => setAddOpen(true)} />

      {isAddOpen && <TransactionModal onClose={() => setAddOpen(false)} />}
      {isImportOpen && <ImportModal onClose={() => setImportOpen(false)} />}
    </div>
  );
}
