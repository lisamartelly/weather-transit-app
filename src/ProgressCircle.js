import "./ProgressBar.scss";

function ProgressCircle(props) {

    const 
        size = 60,
        timeLeft = props.timeLeft,
        trackWidth = 20,
        trackColor = `#ddd`,
        indicatorWidth = 20,
        indicatorColor = `#07c`,
        indicatorCap = `butt`,
        label = ``,
        labelColor = `black`,
        center = size / 2,
        radius = center - trackWidth,
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((32 - timeLeft) / 32);

    return (
        <>
            <div
            className="svg-progress-circle-wrapper "
            style={{ width: size, height: size }}
            >
            <svg
                className="svg-progress-circle" 
                style={{ width: size, height: size }}
            >
                <circle
                className="svg-progress-circle-track"
                cx={center}
                cy={center}
                fill="transparent"
                r={radius}
                stroke={trackColor}
                strokeWidth={trackWidth}
                />

                <circle
                className="svg-progress-circle-indicator "
                cx={center}
                cy={center}
                fill="transparent"
                r={radius}
                stroke={indicatorColor}
                strokeWidth={indicatorWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                strokeLinecap={indicatorCap}
                />
            </svg>

            <div className="svg-progress-circle-label" style={{ color: labelColor }}>
                <span className="svg-progress-circle-label__loading">
                    {label}
                </span>
            </div>
        </div>
    </>
    )
};

export default ProgressCircle;