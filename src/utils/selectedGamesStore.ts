type GameChangeListener = (selectedGame: string) => void;

class SelectedGameStore {
  private selectedGame: string = "Fortnite New Season";
  private listeners: GameChangeListener[] = [];

  public getSelectedGame(): string {
    return this.selectedGame;
  }

  public setSelectedGame(game: string): void {
    this.selectedGame = game;
    this.notifyListeners();
  }

  public addListener(listener: GameChangeListener): void {
    this.listeners.push(listener);
  }

  public removeListener(listener: GameChangeListener): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener(this.selectedGame));
  }
}

export default new SelectedGameStore();


