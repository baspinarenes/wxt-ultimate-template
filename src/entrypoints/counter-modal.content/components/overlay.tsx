export function Overlay({ onClick }: OverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClick} />
  );
}

type OverlayProps = {
  onClick: () => void;
};
