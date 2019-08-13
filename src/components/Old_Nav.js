<nav id="nav" className={props.sticky ? 'alt' : ''}>
  <Scrollspy
    items={['intro', 'first', 'second', 'cta']}
    currentClassName="is-active"
    offset={-300}
  >
    <li>
      <Scroll type="id" element="intro">
        <a href="#">Introduction</a>
      </Scroll>
    </li>
    <li>
      <Scroll type="id" element="first">
        <a href="#">Projects</a>
      </Scroll>
    </li>
    <li>
      <Scroll type="id" element="second">
        <a href="#">Photography</a>
      </Scroll>
    </li>
    <li>
      <Scroll type="id" element="cta">
        <a href="#">Music</a>
      </Scroll>
    </li>
  </Scrollspy>
</nav>;
