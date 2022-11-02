import VuesaxBoldNotification from "assets/VuesaxBoldNotification";

const Notification  = (props) => {
  return (
    <div
      className="absolute top-[40.32%] bottom-[40.32%] left-[84.31%] right-[14.03%]"
    >
      <VuesaxBoldNotification />
    </div>
  );
}

Notification.defaultProps = {};

export default Notification;