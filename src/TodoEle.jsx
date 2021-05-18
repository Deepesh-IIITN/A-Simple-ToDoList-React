export default function TodoEle(probs) {
  return (
    <li
      key={probs.id}
      onClick={() => {
        return probs.func(probs.id);
      }}
      style={{ textDecoration: "none" }}
    >
      {probs.li}
    </li>
  );
}
