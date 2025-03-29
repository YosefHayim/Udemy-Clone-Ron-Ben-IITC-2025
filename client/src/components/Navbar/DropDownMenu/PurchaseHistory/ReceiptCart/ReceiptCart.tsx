import styles from "./ReceiptCart.module.css";

const ReceiptCart = () => {
  return (
    <div className="p-[3em]">
      <div>
        <h1 className="mb-[1.5em] font-sans text-[1.6em] font-extrabold" styles={styles.title}>
          Receipt
        </h1>
        <h2 className="mb-[1.4em] font-sans text-[1.2em] font-extrabold">
          Receipt for Cart - Dec. 30, 2024
        </h2>
      </div>
      <div className="mb-[1em]">
        <ul>
          <p className="mb-[1em] text-[1.2em]">Udemy, Inc.</p>
          <li>600 Harrison Street, 3rd Floor</li>
          <li>San Francisco, CA 94107, US</li>
          <li>
            <a href="https://www.udemy.com/" className="text-purple-700 underline">
              udemy.com
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-[2em]">
        <ul>
          <li>
            <b>Date:</b>
          </li>
          <li>
            <b>Order#:</b>
          </li>
          <li>
            <b>Sold To:</b>
          </li>
        </ul>
      </div>
      <div className="flex w-full flex-row items-start justify-between text-[1.2em]">
        <div>
          <b>Item</b>
        </div>
        <div className="flex items-start justify-end gap-[3em]">
          <b>Ordered</b>
          <b>Coupon Codes</b>
          <b>Quantity</b>
          <b>Price</b>
          <b>Amount</b>
        </div>
      </div>
      <hr />
      <div className="flex w-full flex-row items-start justify-between text-[1.2em]">
        <div>
          <p>React Native - The Practical Guide [2025]</p>
        </div>
        <div className="flex items-start justify-end gap-[3em]">
          <p>Dec. 30,2024</p>
          <p>24T7MT123024</p>
          <p>1</p>
          <p> ₪149.90</p>
          <p> ₪149.90</p>
        </div>
      </div>
      <hr />
      <div className="mb-[2em] flex w-[1180px] items-center justify-end gap-[3.5em]">
        <p>Total Paid</p>
        <p> ₪149.90</p>
      </div>
      <hr className="mb-[1em]" />
      <div>
        <p>
          If you have any questions about this receipt please contact our{" "}
          <span className="text-purple-700 underline">support team.</span>
        </p>
      </div>
    </div>
  );
};

export default ReceiptCart;
