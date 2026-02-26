import { useState } from "react";

const Updator = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([
    { id: 1, name: "Object 1", done: false },
    { id: 2, name: "Object 2", done: false },
    { id: 3, name: "Object 3", done: false },
  ]);
  const [delArr, setDelArr] = useState([]);

  const addItem = () => {
    const newId = arr.length + 1;

    const itsValue = input.trim() ? input.trim() : `Object ${newId}`;
    const newItem = { id: newId, name: itsValue, done: false };
    setArr((prevArr) => [...prevArr, newItem]);
    setInput("");
  };

  const doneWithMember = (id) => {
    const removedMember = arr.find((member) => member.id === id);
    if (!removedMember) return;

    setArr((prevArr) => prevArr.filter((item) => item.id !== id));

    setDelArr((prevDelArr) => [
      ...prevDelArr,
      { ...removedMember, done: true },
    ]);
  };

  const clearMembers = () => {
    setArr(() => []);
  };

  const removeMember = (id) => {
    setArr((prevArr) => prevArr.filter((item) => item.id !== id));
  };

  const clearBin = () => {
    setDelArr(() => [])
  }

  return (
    <>
      <div
        style={{ fontFamily: "Quicksand", border: "1px solid black" }}
        className="p-2 rounded flex flex-col m-4"
      >
        <div className="flex flex-row gap-6 items-center justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem();
              }
            }}
            type="text"
            name="text"
            id="text"
            style={{ border: ".5px solid black" }}
            className="rounded"
          />
          <button
            onClick={addItem}
            className="transition-all duration-100 scale-100 active:scale-90 border border-black px-1 rounded-sm bg-green-300"
          >
            Add Item
          </button>
          <button
            onClick={clearMembers}
            className="transition-all duration-100 scale-100 active:scale-90 border border-black px-1 rounded-sm bg-red-400"
          >
            Clear
          </button>
        </div>
        <ul
          className="
                grid
                grid-flow-col
                auto-cols-max
                grid-rows-10
                gap-3
                mt-4
                overflow-x-auto
                max-w-full
            "
        >
          {arr.map((arrMember) => (
            <li key={arrMember.id} className="flex flow-row gap-4">
              {arrMember.name}{" "}
              <button
                className="transition-all duration-100 scale-75 active:scale-50 border border-black px-1 rounded-sm bg-red-400"
                onClick={() => {
                  removeMember(arrMember.id);
                }}
              >
                X
              </button>
              <button
                className="transition-all duration-100 scale-95 active:scale-75 border border-black px-1 rounded-sm bg-green-300"
                onClick={() => {
                  doneWithMember(arrMember.id);
                }}
              >
                ✓
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ fontFamily: "Quicksand", border: "1px solid black" }}
        className="p-2 rounded flex flex-col m-4"
      >
        <div className="flex flex-row gap-5 items-center justify-center">
            <h1 className="underline my-3">Completed</h1>
            <button
                onClick={clearBin}
                className="transition-all w-min duration-100 scale-100 active:scale-90 border border-black px-1 rounded-sm bg-red-400"
            >
                Clear
            </button>
        </div>
        <ul
          className="
                grid
                grid-flow-col
                auto-cols-max
                grid-rows-5
                gap-3
                mt-4
                overflow-x-auto
                max-w-full
                "
        >
          {delArr.map((arrMember) => (
            <li key={arrMember.id}>
              <del>{arrMember.name}</del>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Updator;
