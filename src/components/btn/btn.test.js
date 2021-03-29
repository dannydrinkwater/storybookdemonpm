import { render, screen } from '@testing-library/react';

// Import the component directly to test against
import Btn from './btn.component';

//👇 Import a specific story to test against
import { Primary } from './btn.stories';

// This is needed when using the component directly, for stories we can use the data already mocked in the story itself
const buttonProps = {
    type: "primary",
    label: "My button"
};

describe('Show the button', () => {

    // Testing against the component directly
    it('renders a button with text', () => {
        render(<Btn {...buttonProps} />);

        const button = screen.getByText(buttonProps.label);
        expect(button).toBeInTheDocument();
    })

    // Test against a specific Storybook story
    it('renders the button in the primary state', () => {
        render(<Primary {...Primary.args} />);
    
        expect(screen.getByRole('button')).toHaveTextContent('Button');
    });
});