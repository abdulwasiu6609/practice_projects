"use client";

export default function EventHandlers() {
  function handleClick() {
    alert(`1 + 2 = ${1 + 2} => the miracle has been performed`);
  }
  function handleMouseEnter() {
    alert(`The mouse has enterer`);
  }
  function handleMouseLeave() {
    alert(`The mouse has left
        `);
  }

  return (
    <div className="">
      <h1 className="font-bold text-2xl text-center">Event handlers</h1>
      <h2 className="font-bold text-xl">Adding event handlers</h2>
      <button className="bg-yellow-300 p-2 rounded m-2 hover:bg-yellow-900 hover:text-yellow-200">
        I don't do anything
      </button>
      <button
        className="bg-yellow-300 p-2 rounded m-2 hover:bg-yellow-900 hover:text-yellow-200"
        onClick={handleClick}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        I do something
      </button>
      <button
        className="bg-yellow-300 p-2 rounded m-2 hover:bg-yellow-900 hover:text-yellow-200"
        onClick={function handleClick() {
          alert(`This is inline function`);
        }}
      >
        inline
      </button>
      <button
        className="bg-yellow-300 p-2 rounded m-2 hover:bg-yellow-900 hover:text-yellow-200"
        onClick={() => {
          alert(`This is arrow function`);
        }}
      >
        arrow function
      </button>
      <h2 className="font-bold text-2xl">Reading props in event handlers </h2>
      <AlertButton message={"I am the message"} children={"click me"} />
      <h2 className="font-bold text-2xl">Passing event handlers as props </h2>
      <Button
        onClick={() => alert("i am the functional prop")}
        children={"i am a button"}
      />
      <Button
        onClick={() => alert("i am the functional prop of another button")}
        children={"i another button"}
      />
      <h2 className="font-bold text-xl">Event Propagation</h2>
      <div
        onClick={() => alert("this is a propagated event")}
        className="w-full bg-blue-900"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();

            alert("first button");
          }}
          className="bg-blue-500 text-white p-2 m-2  rounded"
        >
          first button
        </button>
        <button
          onClick={() => alert("second button")}
          className="bg-blue-500 text-white p-2  m-2 rounded"
        >
          Second button
        </button>
      </div>
      {/* <div className="w-full h-200 bg-red-700"></div> */}
      <h2 className="font-bold text-xl">Prenvent event propagation</h2>
      <div
        onClick={() => alert("this is a propagated event")}
        className="w-full bg-blue-900"
      >
        <Button
          children={"first button"}
          onClick={() => alert("first button")}
        />
        <Button
          children={"second button"}
          onClick={() => alert("second button")}
        />
      </div>
      <h2 className="font-bold text-xl">Preventing default behavior</h2>
      <Signup />
    </div>
  );
}

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function Button({ onClick, children }) {
  return (
    <button
      className="bg-blue-900 text-white p-2 rounded m-2"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        alert("Submitting!");
      }}
    >
      <input className="border" />
      <button>Send</button>
    </form>
  );
}
