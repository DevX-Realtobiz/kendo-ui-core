(function () {

    // Imports ================================================================
    var kendo = window.kendo,
        Chart = kendo.ui.Chart,
        deepExtend = Chart.deepExtend;

    // Constants ==============================================================
    var BLACK = "#000",
        SANS = "Arial,Helvetica,sans-serif",
        SANS11 = "11px " + SANS,
        SANS12 = "12px " + SANS,
        SANS16 = "16px " + SANS,
        WHITE = "#fff";

    // Kendo themes ===========================================================
    var baseTheme = {
            title: {
                font: SANS16
            },
            legend: {
                labels: {
                    font: SANS12
                }
            },
            seriesDefaults: {
                labels: {
                    font: SANS11
                }
            },
            categoryAxis: {
                labels: {
                    font: SANS12
                }
            },
            valueAxis: {
                labels: {
                    font: SANS12
                }
            },
            tooltip: {
                font: SANS12
            }
        };

    var themes = { };

    themes.black = deepExtend({}, baseTheme, {
        title: {
            color: WHITE
        },
        legend: {
            labels: {
                color: WHITE
            }
        },
        seriesDefaults: {
            labels: {
                color: WHITE
            },
            pie: {
                highlight: {
                    opacity: 0.6,
                    color: "#3b3b3b",
                    border: {
                        width: 0.5,
                        opacity: 0.9,
                        color: "#000"
                    }
                },
                overlay: {
                    gradient: "sharpBevel"
                }
            },
            line: {
                markers: {
                    background: "#3b3b3b"
                }
            },
            scatter: {
                markers: {
                    background: "#3b3b3b"
                }
            },
            scatterLine: {
                markers: {
                    background: "#3b3b3b"
                }
            }
        },
        chartArea: {
            background: "#3b3b3b"
        },
        seriesColors: ["#0081da", "#3aafff", "#99c900", "#ffeb3d", "#b20753", "#ff4195"],
        categoryAxis: {
            majorGridLines: {
                visible: true
            }
        },
        axisDefaults: {
            line: {
                color: "#8e8e8e"
            },
            labels: {
                color: WHITE
            },
            majorGridLines: {
                color: "#545454"
            },
            minorGridLines: {
                color: "#454545"
            }
        },
        tooltip: {
            background: "#3b3b3b",
            color: WHITE,
            opacity: 0.8
        }
    });

    themes["default"] = deepExtend({}, baseTheme, {
        title: {
            color: "#8e8e8e"
        },
        legend: {
            labels: {
                color: "#232323"
            }
        },
        seriesDefaults: {
            labels: {
                color: BLACK,
                background: WHITE,
                opacity: 0.5
            }
        },
        seriesColors: ["#ff6800", "#a0a700", "#ff8d00", "#678900", "#ffb53c", "#396000"],
        categoryAxis: {
            majorGridLines: {
                visible: true
            }
        },
        axisDefaults: {
            line: {
                color: "#8e8e8e"
            },
            labels: {
                color: "#232323"
            },
            minorGridLines: {
                color: "#f0f0f0"
            },
            majorGridLines: {
                color: "#dfdfdf"
            }
        },
        tooltip: {
            background: WHITE,
            color: BLACK,
            opacity: 0.8
        }
    });

    themes.blueopal = deepExtend({}, baseTheme, {
        title: {
            color: "#293135"
        },
        legend: {
            labels: {
                color: "#293135"
            }
        },
        seriesDefaults: {
            labels: {
                color: BLACK,
                background: WHITE,
                opacity: 0.5
            }
        },
        seriesColors: ["#0069a5", "#0098ee", "#7bd2f6", "#ffb800", "#ff8517", "#e34a00"],
        categoryAxis: {
            majorGridLines: {
                visible: true
            }
        },
        axisDefaults: {
            line: {
                color: "#9aabb2"
            },
            labels: {
                color: "#293135"
            },
            majorGridLines: {
                color: "#c4d0d5"
            },
            minorGridLines: {
                color: "#edf1f2"
            }
        },
        tooltip: {
            background: WHITE,
            color: BLACK,
            opacity: 0.8
        }
    });

    themes.silver = deepExtend({}, baseTheme, {
        title: {
            color: "#4e5968"
        },
        legend: {
            labels: {
                color: "#4e5968"
            }
        },
        seriesDefaults: {
            labels: {
                color: "#293135",
                background: WHITE,
                opacity: 0.5
            },
            pie: {
                connectors: {
                    color: "#A6B1C0"
                }
            }
        },
        chartArea: {
            background: "#f4f4f4"
        },
        seriesColors: ["#007bc3", "#76b800", "#ffae00", "#ef4c00", "#a419b7", "#430B62"],
        categoryAxis: {
            majorGridLines: {
                visible: true
            }
        },
        axisDefaults: {
            line: {
                color: "#a6b1c0"
            },
            labels: {
                color: "#4e5968"
            },
            majorGridLines: {
                color: "#dcdcdf"
            },
            minorGridLines: {
                color: "#eeeeef"
            }
        },
        tooltip: {
            background: WHITE,
            color: "#4e5968",
            opacity: 0.8
        }
    });

    // Exports ================================================================
    Chart.themes = themes;
    Chart.prototype.options.theme = "default";

})(jQuery);

