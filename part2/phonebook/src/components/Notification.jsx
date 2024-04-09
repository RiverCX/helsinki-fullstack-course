const Notification = ({ messageInfo }) => {
  if (!messageInfo) {
    return null;
  }
  return (
    <div
      className="notification"
      style={{ color: messageInfo.isError ? "red" : "green" }}
    >
      {messageInfo.message}
    </div>
  );
};

export default Notification;
