import "./EventsTab.scss";
import Events from "../Events/Event";

function EventsTab({ communityData, setEventsOverlay, events }) {
  function noEvents() {
    return (
      <div className="events-tab__none">
        <p className="events-tab__none-writing">
          Share important updates with your community. Spark curiosity and keep
          everyone informed.
        </p>
        <button
          className="events-tab__none-button"
          onClick={() => setEventsOverlay(true)}
        >
          + Create Events
        </button>
      </div>
    );
  }

  function someEvents() {
    return (
      <div className="events-tab__none">
        <p className="events-tab__none-writing">
          Bring your community to life!
          <br /> Create events to connect and engage
        </p>
        <button
          className="events-tab__none-button"
          onClick={() => setEventsOverlay(true)}
        >
          + Create Events
        </button>
      </div>
    );
  }

  return (
    <section className="events-tab-background">
      <div className="events-tab-">
        {events.length === 0 ? noEvents() : someEvents()}
      </div>
      <Events communityData={communityData} />
    </section>
  );
}

export default EventsTab;
