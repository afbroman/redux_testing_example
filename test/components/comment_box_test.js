import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    let textarea;

    beforeEach(() => {
      textarea = component.find('textarea');
      textarea.simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(textarea).to.have.value('new comment');
    });

    it('clears the input when submitted', () => {
      component.simulate('submit');
      expect(textarea).to.have.value('');
    });
  });
});

