import styles from "./ReceiptCart.module.css";

const ReceiptCart = () => {
  return (
    <div className="p-[3em]">
      <div>
        <h1 className="font-bold text-[1.6em] mb-[1.5em]" styles={styles.title}>
          Receipt
        </h1>
        <h2 className="font-bold text-[1.2em] mb-[1.4em]">
          Receipt for Cart - Dec. 30, 2024
        </h2>
      </div>
      <div className="mb-[1em]">
        <ul>
          <p className="mb-[1em] text-[1.2em]">Udemy, Inc.</p>
          <li>600 Harrison Street, 3rd Floor</li>
          <li>San Francisco, CA 94107, US</li>
          <li>
            <a
              href="https://www.udemy.com/"
              className="underline text-purple-700"
            >
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
      <div className="flex flex-row items-start justify-between w-full text-[1.2em]">
        <div>
          <b>Item</b>
        </div>
        <div className="flex justify-end items-start gap-[3em]">
          <b>Ordered</b>
          <b>Coupon Codes</b>
          <b>Quantity</b>
          <b>Price</b>
          <b>Amount</b>
        </div>
      </div>
      <hr />
      <div className="flex flex-row items-start justify-between w-full text-[1.2em]">
        <div>
          <p>React Native - The Practical Guide [2025]</p>
        </div>
        <div className="flex gap-[3em] justify-end items-start">
          <p>Dec. 30,2024</p>
          <p>24T7MT123024</p>
          <p>1</p>
          <p> ₪149.90</p>
          <p> ₪149.90</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-end w-[1180px] items-center gap-[3.5em] mb-[2em]">
        <p>Total Paid</p>
        <p> ₪149.90</p>
      </div>
      <hr className="mb-[1em]" />
      <div>
        <p>
          If you have any questions about this receipt please contact our{" "}
          <span className="underline text-purple-700">support team.</span>
        </p>
      </div>
    </div>
  );
};

export default ReceiptCart;
