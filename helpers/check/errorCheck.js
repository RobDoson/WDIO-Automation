  
/**
 * Check if the given element is (not) visible
 */
export default () => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const firstError = $("[class='_5dbc img sp_DORJU00N8ON sx_7efd60']");
    console.log(expect(firstError).toBeVisible());
    return expect(firstError).toBeVisible();
};