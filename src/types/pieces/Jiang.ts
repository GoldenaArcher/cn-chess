import ChessPiece from "./ChessPiece";
import PieceType from "./PieceType";

export default class JIANG extends ChessPiece {
    public getLegalMoves(): string[] {
        throw new Error("Method not implemented.");
    }
    public getTypes(): PieceType {
        throw new Error("Method not implemented.");
    }
    public getImages(): string {
        throw new Error("Method not implemented.");
    }
}