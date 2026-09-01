import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import DynamicForm, { validateFields } from '../DynamicForm/DynamicForm.jsx';
import formConfig from '../../config/transactionFormConfig.json';
import { useTransactionStore } from '../../store/useTransactionStore';
import './TransactionModal.scss';

/** Floating-add-button destination: builds + submits a new transaction
 *  using the field list from transactionFormConfig.json. */
export default function TransactionModal({ onClose }) {
  const addTransaction = useTransactionStore((s) => s.addTransaction);
  const [values, setValues] = useState({ type: 'debit' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = validateFields(formConfig.fields, values);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      await addTransaction({ ...values, amount: Number(values.amount) });
      onClose();
    } catch (err) {
      setSubmitError(err.response?.data?.message || 'Could not save transaction. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal title={formConfig.title} onClose={onClose}>
      <form className="transaction-modal" onSubmit={handleSubmit}>
        <DynamicForm fields={formConfig.fields} values={values} errors={errors} onChange={handleChange} />

        {submitError && <p className="transaction-modal__submit-error">{submitError}</p>}

        <div className="transaction-modal__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn--primary" disabled={submitting}>
            {submitting ? 'Saving…' : 'Save Transaction'}
          </button>
        </div>
      </form>
    </Modal>
  );
}
