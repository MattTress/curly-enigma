export const InputA = ({
  titleA,
  valueA,
  typeA,
  idA,
  placeholderA,
  nameA,
  onChangeA,
}) => {
  return (
    <label htmlFor={idA} className="flex flex-col items-start gap-2 ">
      <span className="text-sm font-medium">{titleA}</span>
      <input
        className="w-[340px] px-5 py-[3px] border rounded-[3px]"
        type={typeA}
        name={nameA}
        id={idA}
        placeholder={placeholderA}
        value={valueA}
        onChange={onChangeA}
      />
    </label>
  );
};
