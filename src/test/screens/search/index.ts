export default interface Search {
    searchRestraunt(restraunt: string): void
    searchItem(item: string): void
    selectRestraunt(name?: string): void
}