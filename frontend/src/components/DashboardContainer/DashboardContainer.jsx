import { CONTAINER_REGISTRY } from './registry.js';
import './DashboardContainer.scss';

/** Wraps one dashboard widget in a card with an optional title, and
 *  applies the JSON-configured column span. */
export default function DashboardContainer({ container }) {
  const Component = CONTAINER_REGISTRY[container.type];

  if (!Component) {
    console.warn(`DashboardContainer: no component registered for type "${container.type}"`);
    return null;
  }

  // The tileGrid container is transparent (tiles are cards themselves),
  // everything else gets the standard card chrome + title.
  if (container.type === 'tileGrid') {
    return (
      <div className="dashboard-container dashboard-container--bare" style={{ gridColumn: `span ${container.span}` }}>
        <Component />
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{ gridColumn: `span ${container.span}` }}>
      {container.title && <h2 className="dashboard-container__title">{container.title}</h2>}
      <Component />
    </div>
  );
}
