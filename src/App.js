import React, { Component } from 'react';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link
          activeClass="active"
          to="test1"
          // spy={true}
          smooth={true}
          // offset={50}
          duration={500}
        >
          Test 1
        </Link>
        <Header />
        <h1>Part 1</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 2</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 3</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 4</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <Element name="test1">
          <h1>Part 5</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          volutpat consequat mauris nunc congue nisi vitae suscipit. Ultrices
          tincidunt arcu non sodales neque sodales ut. Odio aenean sed
          adipiscing diam donec adipiscing tristique. Sed vulputate mi sit amet
          mauris commodo quis imperdiet massa. At tempor commodo ullamcorper a
          lacus vestibulum sed arcu. Massa placerat duis ultricies lacus sed
          turpis tincidunt. Sit amet nisl purus in. Nisl tincidunt eget nullam
          non nisi est sit amet. Pretium nibh ipsum consequat nisl.
        </Element>
        <br />
        <a onClick={this.scrollTop}>To the top!</a>
        <h1>Part 6</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 7</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 8</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 9</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 10</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 11</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 12</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
        <h1>Part 13</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi vitae suscipit. Ultrices tincidunt
        arcu non sodales neque sodales ut. Odio aenean sed adipiscing diam donec
        adipiscing tristique. Sed vulputate mi sit amet mauris commodo quis
        imperdiet massa. At tempor commodo ullamcorper a lacus vestibulum sed
        arcu. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet
        nisl purus in. Nisl tincidunt eget nullam non nisi est sit amet. Pretium
        nibh ipsum consequat nisl.
      </div>
    );
  }
  scrollTop = () => {
    scroll.scrollToTop();
  };
}

export default App;
