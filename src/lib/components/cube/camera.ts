import type { TwistyPlayer } from "cubing/twisty";

export function rememberCamera(player: TwistyPlayer) {
    const scene = player.experimentalModel.twistySceneModel;
    const initial = scene.orbitCoordinates.get();
    return async () => {
        scene.orbitCoordinatesRequest.set(await initial);
    };
}
