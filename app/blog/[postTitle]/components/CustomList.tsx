interface CustomListProps {
  index: number;
  listTitle: string;
  subListAraay: string[];
}

export default function CustomList({
  index,
  listTitle,
  subListAraay,
}: CustomListProps) {
  return (
    <ul className="my-6 flex list-inside flex-col gap-y-2">
      <li className="font-semibold">
        {index}. {listTitle}:
      </li>
      <ul className="ml-8 flex list-outside list-disc flex-col gap-y-1">
        {subListAraay.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </ul>
  );
}
