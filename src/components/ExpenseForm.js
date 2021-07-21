import React from 'react';
import { MdSend } from "react-icons/md";

const ExpenseForm = (
    {
        charge,
        amount,
        handleCharge,
        handleAmount,
        handleSubmit
    }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmFor="charge">charge</label>
                    <input
                        type="text"
                        name="charge"
                        id="charge"
                        className="form-control"
                        placeholder="e.g rent"
                        value={charge}
                        onChange={handleCharge} />
                </div>
                <div className="form-group">
                    <label htmFor="amount">amount</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="form-control"
                        placeholder="e.g. 200"
                        value={amount}
                        onChange={handleAmount} />
                </div>
            </div>
            <button
                type="submit"
                className="btn"
            >
                submit
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
}
export default ExpenseForm;
