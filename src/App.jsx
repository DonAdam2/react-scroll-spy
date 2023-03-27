import ScrollSpy from '@/js/components/scrollSpy/ScrollSpy';

const App = () => {
  const sections = [
    {
      id: 'first',
      label: 'First',
      wrapperClassName: 'section',
      content: (
        <div className="inner-section">
          <h2 className="title">First</h2>
        </div>
      ),
    },
    {
      id: 'second',
      label: 'Second',
      wrapperClassName: 'section transparent',
      content: (
        <div className="inner-section">
          <h2 className="title">Second</h2>
        </div>
      ),
    },
    {
      id: 'third',
      label: 'Third',
      wrapperClassName: 'section',
      content: (
        <div className="inner-section">
          <h2 className="title">Third</h2>
        </div>
      ),
    },
    {
      id: 'forth',
      label: 'Forth',
      wrapperClassName: 'section transparent',
      content: (
        <div className="inner-section">
          <h2 className="title">Forth</h2>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      {/*ScrollSpy properties:
          - sections: list of sections to display in scroll spy component
          - isNavigateToFirstSectionOnLoad: boolean to navigate to the first section of the app
          - menuWrapperClassName: className used to apply styles on the navigation menu
          - mainContentClassName: className used to apply styles on the main content
           */}
      <ScrollSpy
        sections={sections}
        menuWrapperClassName="sidebar"
        mainContentClassName="main-content"
        isNavigateToFirstSectionOnLoad
      />
    </div>
  );
};

export default App;
