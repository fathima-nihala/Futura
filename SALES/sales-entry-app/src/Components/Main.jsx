import { useEffect, useState } from 'react'
import'./home.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { DataPost } from './ApiCall';


const Main = () => {
    const [vrNo, setVrNo] = useState(Number);
    const [vrDate, setVrDate] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(Number);
    const [data, setData] = useState([]);


    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().slice(0, 10);
        setVrDate(formattedDate);
    }, []);

    const [rows, setRows] = useState([
        { srNo: '', itemCode: '', itemName: '', qty: 0, rate: 0, total: 0 },
    ]);

      //reset 
      const newReload = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    //print
    const handlePrint = () => {
        window.print()
    }

    const handleRowChange = (index, field, value) => {
        setRows((prevRows) => {
            const newRows = [...prevRows];
            newRows[index][field] = value;
            if (field === 'qty' || field === 'rate') {
                newRows[index].total = newRows[index].qty * newRows[index].rate;
            }
            return newRows;
        });
    };

    const handleInsertRow = () => {
        setRows((prevRows) => [...prevRows, { srNo: '', itemCode: '', itemName: '', qty: 0, rate: 0, total: 0 }]);
    };

    const handleDeleteRow = (index) => {
        setRows((prevRows) => {
            const newRows = [...prevRows];
            newRows.splice(index, 1);
            return newRows;
        });
    };

    const handleSaveClick = (e) => {
        e.preventDefault();
        const allItems = rows.map((row) => ({ ...row }));
        const totalSum = rows.reduce((sum, row) => sum + row.total, 0);
        setAmount(totalSum)
        DataPost({vrNo,vrDate,name,amount,allItems,totalSum})

    };

    console.log(data);


    return (
        <div className='home'>
            <div className='left'>
                <h2 className='title'>Header</h2>
                <div className='header'>
                    <div className='header-top'>
                    <span>
                            VrNo:-
                                <input type="text" placeholder='Enter voucher no' value={vrNo} onChange={(e) => { setVrNo(e.target.value) }} />
                            </span>
                            <span>
                             VrDate:-
                                <input type="date" placeholder="" value={vrDate} onChange={(e) => setVrDate(e.target.value)} />
                            </span>
                            <span>
                                <h3>Status</h3>
                                <select name="" id="" >
                                <option value="0">A</option>
                                <option value="1">B</option>
                            </select>
                            </span>
                        </div>

                        <div className='header-bottum'>    
                                                <span>
                                                AcName : -
                                <input type="text" className='acname' placeholder='Enter Customer name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </span>
                            <span>
                            AcAmt : -                                <input type="text" placeholder='Total Amount' value={amount}/>
                            </span>
                        </div>
                    </div>

                    <h4 className='Detail-title'>Details</h4>
                <div className='Details'>
                    <table style={{ width: "100%", border: "1px solid black" }} className='datails-table'>
                        <thead className='thead'>
                            <tr className="Tr">
                                <th className="Th">Sr No</th>
                                <th className="Th">Item Code</th>
                                <th className="Th">Item Name</th>
                                <th className="Th">Qty</th>
                                <th className="Th">Rate</th>
                                <th className="Th">Amount</th>
                                <th className="Th" value={amount}>Total</th>
                            </tr>
                        </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}>
                                            <td><input type="number" value={row.srNo} onChange={(e) => handleRowChange(index, 'srNo', e.target.value)} /></td>
                                            <td><input type="text" value={row.itemCode} onChange={(e) => handleRowChange(index, 'itemCode', e.target.value)} /></td>
                                            <td><input type="text" value={row.itemName} onChange={(e) => handleRowChange(index, 'itemName', e.target.value)} /></td>
                                            <td><input type="number" value={row.qty} onChange={(e) => handleRowChange(index, 'qty', e.target.value)} /></td>
                                            <td><input type="number" value={row.rate} onChange={(e) => handleRowChange(index, 'rate', e.target.value)} /></td>
                                            <td>{row.total}</td>
                                            <td><button><FaRegTrashCan onClick={() => handleDeleteRow(index)} /></button></td>
                                        </tr>
                                    ))}
                                                            </tbody>

                               </table>
                    <div style={{ textAlign: "right", marginRight: "10em" }}>
                        Total :- &nbsp;
                    </div>

                </div>
            </div>
            <div className='right-btns'>
                <h3 onClick={newReload}>New</h3>
                <h3 onClick={handleInsertRow}>Insert</h3>
                <h3 onClick={handleSaveClick}>Save</h3>
                <h3 onClick={handlePrint}>Print</h3>
            </div>
</div>
    )
}

export default Main