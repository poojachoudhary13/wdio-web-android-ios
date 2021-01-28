export default interface Restraunt {
    addItem(name: string, count: number): void
    selectItem(name?: string): void
    addToBasket(count: number): void
    clickSearch(): void
    verifyBasketCountOnRestrauntScreen(count: number): void
    viewBasket(): void
}