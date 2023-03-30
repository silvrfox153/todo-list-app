export const Task = (props) => {
  return (
    <>
      <h1 className="text-xl font-medium self-center">{props.taskName}</h1>
      {/* DELETE TASK */}

      <button
        className="bg-sky-500 font-medium text-white px-2 ml-4"
        onClick={() => props.deleteTask(props.id)}
      >
        X
      </button>
    </>
  );
};
