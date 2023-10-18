import Container from "./Container.astro";
import Logo from "./Logo.astro";
import Navigation from "./Navigation.astro";

<Fragment>
  <script>
    {() => {
      import "./ThemeToggleButton/theme-toggle-button";
    }}
  </script>

  <header>
    <Container>
      <nav>
        <a class="header__logo" href="/" title="Navigate Home">
          <Logo />
        </a>
        <Navigation />
      </nav>
    </Container>
  </header>

  <style>{`
  header {
    height: var(--theme-header-height, 64px);
    display: flex;
    align-items: center;
    /* border-bottom: 1px solid var(--theme-primary-light); */
    color: var(--theme-primary);
    background-color: var(--theme-background);
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__logo {
    display: flex;
    align-items: center;
    margin: 0;
  }
  .theme-toggle__container {
    margin-left: 1rem;
    position: relative;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`}</style>
</Fragment>;
