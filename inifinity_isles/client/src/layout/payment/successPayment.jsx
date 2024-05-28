import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { savenUpdateReceipt } from '../../../apps/action/cartAction';
// import { savenUpdateReceipt } from '../../../apps/action/prodAction';

const SuccessPayment = () => {
  const [loader, setLoader] = useState(false);
  const [recipt, setRecipt] = useState([]);
  const [userData, setUserData] = useState({});
  const receiptRef = useRef();

  useEffect(() => {
    const storedRecipt = JSON.parse(localStorage.getItem('recipt'));
    const storedUser = JSON.parse(localStorage.getItem('auth'));
    if (storedRecipt && storedUser) {
      setRecipt(storedRecipt);
      setUserData(storedUser.data);
    }
  }, []);

  const dispatch = useDispatch()
  const Dater = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    dispatch(savenUpdateReceipt(recipt))
  }, [dispatch, recipt])

  const downloadPDF = () => {
    setLoader(true);
    const element = receiptRef.current;

    html2canvas(element, { scale: 4 }).then(async(canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')

      const margin = 10; // Margin in mm
      const imgWidth = 210 - margin * 2; // A4 width in mm minus margins
      const pageHeight = 297 - margin * 2; // A4 height in mm minus margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = margin;

      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + margin;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      setLoader(false);
      pdf.save('receipt.pdf');
    }).catch((error) => {
      console.error('Error generating PDF:', error);
      setLoader(false);
    });
  };

  const totalPrice = recipt.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-medium my-3">Receipt</div>
      <div ref={receiptRef} className="border border-gray-300 p-2 rounded-md w-1/2 actual-receipt">
        <div className="bg-white border border-gray-300 rounded-md w-full px-2 py-1">
          <div className="text-lg text-teal-500 font-medium">Your Detail:</div>
          <div className="border-b border-gray-300 w-full mt-2" ></div>
          <div className="flex justify-between items-center" >
            <div>
              <div className="text-xs" >To</div>
              <div className="text-lg font-bold">Buyer</div>
            </div>
          </div>
          <div className="mb-0.5" ><span className="font-semibold">Name:</span> {userData.username}</div>
          <div className="mb-2" ><span className="font-semibold">Email:</span> {userData.email}</div>
        </div>
        <div className="border border-gray-300 rounded-md mt-2 overflow-hidden">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 pt-1 pb-4">Item</th>
                  <th scope="col" className="px-4 pt-1 pb-4">Qty</th>
                  <th scope="col" className="px-4 pt-1 pb-4">Rate</th>
                  <th scope="col" className="px-4 pt-1 pb-4">Subtotal</th>
                </tr>
              </thead>
              {recipt?.map(items => (
                <tbody key={items.id}>
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap pt-1 pb-4">
                      {items.title}
                    </th>
                    <td className="px-6 pt-1 pb-4">
                      {items.qty}
                    </td>
                    <td className="px-6 pt-1 pb-4">
                      $ {items.price}
                    </td>
                    <td className="px-6 pt-1 pb-4">
                      $ {items.total}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div className="flex justify-between bg-white rounded-md p-2 mt-1">
          <div>
            <span className="font-bold">Total:</span> <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div><span className="font-medium">Receipt Date:</span> {Dater(new Date())}</div>
        </div>
      </div>
      <div className="flex justify-between w-1/2 my-2 cursor-pointer">
        <button className={`text-white bg-red-700 hover:bg-opacity-80 px-4 py-2 rounded ${loader ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={downloadPDF} disabled={loader}>
          {loader ? "Downloading" : "Save & Download"}
        </button>
        <Link to='/'><div className="text-white bg-blue-600 hover:bg-opacity-80 px-4 py-2 rounded">Continue shopping</div></Link>
      </div>
    </div>
  );
};

export default SuccessPayment;
