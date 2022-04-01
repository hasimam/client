import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
    function handelPlay() {
        chooseTrack(track)
    }
    return (
        <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer" }}
            onClick={handelPlay}>
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="px-2">
                <div> {track.title} </div>
                <div className="text-muted"> {track.artist} </div>
            </div>
        </div>
    )
}
