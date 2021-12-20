import React, { useRef, useState } from 'react';

const tabsData = [
  {
    value: 'home',
    name: 'Home',
  },
  {
    value: 'dashboard',
    name: 'Dashboard',
  },
  {
    value: 'profile',
    name: 'Profile',
  },
  {
    value: 'settings',
    name: 'Settings',
  },
];

/**
 * Inspiration from vercel's navigation bar
 * On hovering a link, there will be a background color behind it
 * This box that acts as the background color will move from link to link
 *
 * The container should be flexbox and able to be horizontal or vertical
 *
 * For the hovering box, we need to use javascript to get its position, it should be the
 * bounding box of the current link it is hovering
 *
 * Wrapper bounding box is the bounding box of the container
 */

export default function NavBar() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<
    DOMRect | undefined
  >(undefined);
  const [highlightedTab, setHighlightedTab] = useState<any | undefined>(
    undefined,
  );
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(false);

  const highlightStyles: Record<string, any> = {};

  const resetHighlightStyles = () => setHighlightedTab(undefined);

  const repositionHighlightTab = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: any,
  ) => {
    setTabBoundingBox(event.currentTarget.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current?.getBoundingClientRect());

    setIsHoveredFromNull(!!!highlightedTab);
    setHighlightedTab(tab);
  };

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.width = tabBoundingBox.width + 'px';
    highlightStyles.height = tabBoundingBox.height + 'px';
    highlightStyles.transform = `translateX(${
      (tabBoundingBox?.left || 0) - (wrapperBoundingBox?.left || 0)
    }px)`;
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '250ms';
    highlightStyles.willChange = 'transform, opacity, width';
    highlightStyles.transition = 'transform, opacity, width';
  }

  return (
    <nav
      ref={wrapperRef}
      className="relative"
      onMouseLeave={resetHighlightStyles}
    >
      <div
        className="absolute bg-gray-1000 rounded-md"
        style={highlightStyles}
      />
      {tabsData.map((tab, index) => (
        <a
          key={index}
          className="inline-block relative text-lg text-white font-semibold no-underline px-2 py-1 mx-2 cursor-pointer"
          onMouseEnter={(e) => repositionHighlightTab(e, tab)}
        >
          <span className="px-2">{tab.name}</span>
        </a>
      ))}
    </nav>
  );
}
