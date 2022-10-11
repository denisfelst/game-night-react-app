function NextBtn({ current, changeCurrent }) {
  const nextNumber = current + 1;
  const nextLink = `/q${nextNumber}`;
  console.log("we are in ", current, "next is", current + 1);
  return (
    <div className="App-btn">
      {/* <a className="App-link" onClick={() => changeCurrent()} href={nextLink}>
        NEXT
      </a> */}
    </div>
  );
}

export default NextBtn;
