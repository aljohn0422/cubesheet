import type { TwistyPlayer } from "cubing/twisty";

/**
 * 記下播放器一開始的視角，回傳「重設視角」的函式。
 * 使用者拖動方塊會改變視角；按重置時把視角放回一開始的位置。
 * 所有 3D 動畫（公式卡的播放器、十字 +1 的動畫）共用。
 */
export function rememberCamera(player: TwistyPlayer) {
    const scene = player.experimentalModel.twistySceneModel;
    // 屬性（camera-latitude 等）套用之後才讀，拿到的才是一開始真正的視角
    const initial = scene.orbitCoordinates.get();
    return async () => {
        scene.orbitCoordinatesRequest.set(await initial);
    };
}
