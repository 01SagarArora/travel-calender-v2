const TextArea = (props: { label?: string }) => {
  return (
    <div>
      <label className="mb-2 fs-12 text-white">{props?.label}</label>
      <br />
      <textarea
        style={{
          outline: "none",
          resize: "none",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid white",
          color:"white"
        }}
        rows={3}
        cols={40}
        placeholder=""
      />
    </div>
  );
};

export default TextArea;
