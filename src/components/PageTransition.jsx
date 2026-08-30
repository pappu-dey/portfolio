/**
 * PageTransition — Swiss shader curtain
 * A solid black panel that sweeps left→right (in) then right→left (out).
 * `active` prop controls whether the animation plays.
 */
export default function PageTransition({ active }) {
  return (
    <div className={`pt-curtain${active ? ' pt-curtain--active' : ''}`} aria-hidden="true">
      <div className="pt-curtain-inner" />
    </div>
  );
}
