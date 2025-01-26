export const turner = {
    state: false,
    toggleState() {
        this.state = !this.state;
        console.log(this.state);
    }
}