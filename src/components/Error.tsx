interface ErrorProps {
  message: string;
  onClose: () => void;
}

export function Error({ message, onClose }: ErrorProps) {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <div className="error-message">{message}</div>
        <button className="error-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
