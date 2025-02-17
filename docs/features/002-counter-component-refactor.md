**Title**: 002 - Counter Component Refactor

**Problem Statement**: The counter component is currently embedded within App.tsx, making it less reusable and violating the Single Responsibility Principle. We need to extract it into its own component file.

**Acceptance Criteria**:

- Given the application is running
- When the counter component is moved to its own file
- Then it should maintain all existing functionality:
  - Display the current count
  - Increment when + button is clicked
  - Decrement when - button is clicked
  - Reset when reset button is clicked
- And the component should be properly typed with TypeScript
- And the tests should continue to pass
- And the UI should remain unchanged

**Solution Overview**:

- Create a new Counter component in src/components/Counter
- Move counter logic and UI from App.tsx to the new component
- Update App.tsx to use the new Counter component
- Ensure proper TypeScript types are defined
- Maintain existing styling and functionality

**Testing**:

- Existing Playwright tests should pass without modification
- Component should maintain all test IDs for E2E testing

**Related Issues**: N/A

**Current Progress**: Not started
