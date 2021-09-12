Created three form components essayEdit, essayText & form components. As those three can be handled independently communicating with Redux. Which also improves readibility and reusability.

There is also a mixin file for sass in src/mixins folder, where we have some reusable css code. Which also improves reusability. On extra time, I would also be able to define variables like colors and spacings in a variable.scss file and reuse over application.

Taken care of accessibility, used semantic html. Also handled responsiveness for smaller devices.

Looked to minimize rerenders of a component to improve performance. Also taken care of lighthouse performance improvements.

To show editable textarea on page, I have used react router instead of conditional rendering. To keep it clean and maintain standards.

It was tempting for me to React-hook-form OR formik. But I'm not really getting any benefits in this case as there are no validations and other customizations. I decided to do it without them as it would increase the app size with little to no value here in this case.

Dynamically created form inputs from the list of form fieldnames, as requirements is supporting doing that way. Wouls help in removing duplicating code.

Last thing is that I have used a light weight package to highlight users answers by making them bold. We can just pass the users answers as keywords and essayText to get the desired output result.
