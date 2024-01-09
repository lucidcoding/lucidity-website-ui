export type Response = {
    json: () => Promise<any>;
}

const ageGroupAggregator = (data: any[]) => {
    const grouped = data.map((item) => {
        const returnValue = {
            id: item.ageGroup.id,
            name: item.ageGroup.description,
            value: item.engagementCount
        };

        return returnValue;
    });

    const result: any[] = [];

    grouped.forEach(element => {
        const target = result.find(x => x.id === element.id);

        if (!target) {
            result.push({ ...element });
        }
        else {
            target.value += element.value;
        }
    });

    return result;
};

const ageGroupAndTimePeriodAggregator = (data: any[]) => {
    const grouped = data.map((item) => {
        const returnValue = {
            year: item.date.substring(0, 4),
            ageGroupDescription: item.ageGroup.description,
            ageGroupId: item.ageGroup.id,
            pageViews: item.engagementCount
        };

        return returnValue;
    });

    const result: {
        id: string,
        name: string,
        color: string,
        dateRanges: any[]
    }[] = [];

    grouped.forEach(element => {
        const target = result.find(x => x.id === element.ageGroupId);

        if (!target) {
            result.push({
                id: element.ageGroupId,
                name: element.ageGroupDescription,
                color: "rgb(143, 95, 232)",
                dateRanges: []
            });
        }
        else {
            const startDate = new Date(element.year, 0, 1, 0, 0, 0).toISOString();
            const endDate = new Date(element.year, 11, 31, 23, 59, 59).toISOString();
            const innerTarget = target.dateRanges.find(x => x.startDate.toISOString() === startDate);

            if (!innerTarget) {
                target.dateRanges.push({
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    value: element.pageViews
                })
            }
            else {
                innerTarget.value += element.pageViews;
            }
        }
    });

    return result;
};

const fetch = (url: string) => {
    let aggregator: (data: any[]) => any[];

    if (url == "/api/bar-chart") {
        aggregator = ageGroupAggregator;
    }
    else {
        aggregator = ageGroupAndTimePeriodAggregator;
    }

    const reducedData = aggregator(pageViewData);
    console.log(reducedData);

    return new Promise<Response>((resolve, reject) => {
        const response: Response = {
            json: () => new Promise<any>((jsonResolve, jsonReject) => {
                jsonResolve(reducedData);
            })
        };

        resolve(response);
    });
};

const pageViewData = [
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-01T00:00:00.000Z",
        "engagementCount": 1013
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-01T00:00:00.000Z",
        "engagementCount": 877
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-01T00:00:00.000Z",
        "engagementCount": 1486
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-01T00:00:00.000Z",
        "engagementCount": 759
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-01T00:00:00.000Z",
        "engagementCount": 1921
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-02T00:00:00.000Z",
        "engagementCount": 959
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-02T00:00:00.000Z",
        "engagementCount": 1291
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-02T00:00:00.000Z",
        "engagementCount": 743
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-02T00:00:00.000Z",
        "engagementCount": 906
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-02T00:00:00.000Z",
        "engagementCount": 1058
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-03T00:00:00.000Z",
        "engagementCount": 1011
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-03T00:00:00.000Z",
        "engagementCount": 1035
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-03T00:00:00.000Z",
        "engagementCount": 1383
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-03T00:00:00.000Z",
        "engagementCount": 1480
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-03T00:00:00.000Z",
        "engagementCount": 726
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-04T00:00:00.000Z",
        "engagementCount": 1167
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-04T00:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-04T00:00:00.000Z",
        "engagementCount": 1554
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-04T00:00:00.000Z",
        "engagementCount": 1681
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-04T00:00:00.000Z",
        "engagementCount": 1141
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-05T00:00:00.000Z",
        "engagementCount": 807
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-05T00:00:00.000Z",
        "engagementCount": 539
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-05T00:00:00.000Z",
        "engagementCount": 597
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-05T00:00:00.000Z",
        "engagementCount": 1330
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-05T00:00:00.000Z",
        "engagementCount": 1030
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-06T00:00:00.000Z",
        "engagementCount": 847
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-06T00:00:00.000Z",
        "engagementCount": 1118
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-06T00:00:00.000Z",
        "engagementCount": 1536
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-06T00:00:00.000Z",
        "engagementCount": 1102
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-06T00:00:00.000Z",
        "engagementCount": 1053
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-07T00:00:00.000Z",
        "engagementCount": 493
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-07T00:00:00.000Z",
        "engagementCount": 771
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-07T00:00:00.000Z",
        "engagementCount": 1567
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-07T00:00:00.000Z",
        "engagementCount": 1067
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-07T00:00:00.000Z",
        "engagementCount": 1995
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-08T00:00:00.000Z",
        "engagementCount": 1045
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-08T00:00:00.000Z",
        "engagementCount": 1278
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-08T00:00:00.000Z",
        "engagementCount": 1228
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-08T00:00:00.000Z",
        "engagementCount": 886
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-08T00:00:00.000Z",
        "engagementCount": 1130
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-09T00:00:00.000Z",
        "engagementCount": 810
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-09T00:00:00.000Z",
        "engagementCount": 1282
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-09T00:00:00.000Z",
        "engagementCount": 1191
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-09T00:00:00.000Z",
        "engagementCount": 647
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-09T00:00:00.000Z",
        "engagementCount": 750
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-10T00:00:00.000Z",
        "engagementCount": 574
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-10T00:00:00.000Z",
        "engagementCount": 1392
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-10T00:00:00.000Z",
        "engagementCount": 1190
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-10T00:00:00.000Z",
        "engagementCount": 984
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-10T00:00:00.000Z",
        "engagementCount": 1110
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-11T00:00:00.000Z",
        "engagementCount": 816
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-11T00:00:00.000Z",
        "engagementCount": 1511
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-11T00:00:00.000Z",
        "engagementCount": 1672
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-11T00:00:00.000Z",
        "engagementCount": 1243
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-11T00:00:00.000Z",
        "engagementCount": 731
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-12T00:00:00.000Z",
        "engagementCount": 961
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-12T00:00:00.000Z",
        "engagementCount": 1022
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-12T00:00:00.000Z",
        "engagementCount": 739
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-12T00:00:00.000Z",
        "engagementCount": 1234
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-12T00:00:00.000Z",
        "engagementCount": 1780
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-13T00:00:00.000Z",
        "engagementCount": 685
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-13T00:00:00.000Z",
        "engagementCount": 988
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-13T00:00:00.000Z",
        "engagementCount": 1635
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-13T00:00:00.000Z",
        "engagementCount": 1380
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-13T00:00:00.000Z",
        "engagementCount": 929
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-14T00:00:00.000Z",
        "engagementCount": 846
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-14T00:00:00.000Z",
        "engagementCount": 1036
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-14T00:00:00.000Z",
        "engagementCount": 586
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-14T00:00:00.000Z",
        "engagementCount": 1093
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-14T00:00:00.000Z",
        "engagementCount": 931
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-15T00:00:00.000Z",
        "engagementCount": 1087
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-15T00:00:00.000Z",
        "engagementCount": 927
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-15T00:00:00.000Z",
        "engagementCount": 570
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-15T00:00:00.000Z",
        "engagementCount": 1047
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-15T00:00:00.000Z",
        "engagementCount": 1157
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-16T00:00:00.000Z",
        "engagementCount": 1284
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-16T00:00:00.000Z",
        "engagementCount": 706
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-16T00:00:00.000Z",
        "engagementCount": 1320
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-16T00:00:00.000Z",
        "engagementCount": 617
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-16T00:00:00.000Z",
        "engagementCount": 1462
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-17T00:00:00.000Z",
        "engagementCount": 860
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-17T00:00:00.000Z",
        "engagementCount": 723
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-17T00:00:00.000Z",
        "engagementCount": 748
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-17T00:00:00.000Z",
        "engagementCount": 1747
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-17T00:00:00.000Z",
        "engagementCount": 1519
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-18T00:00:00.000Z",
        "engagementCount": 669
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-18T00:00:00.000Z",
        "engagementCount": 1381
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-18T00:00:00.000Z",
        "engagementCount": 1600
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-18T00:00:00.000Z",
        "engagementCount": 1688
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-18T00:00:00.000Z",
        "engagementCount": 969
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-19T00:00:00.000Z",
        "engagementCount": 737
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-19T00:00:00.000Z",
        "engagementCount": 991
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-19T00:00:00.000Z",
        "engagementCount": 728
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-19T00:00:00.000Z",
        "engagementCount": 831
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-19T00:00:00.000Z",
        "engagementCount": 703
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-20T00:00:00.000Z",
        "engagementCount": 817
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-20T00:00:00.000Z",
        "engagementCount": 522
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-20T00:00:00.000Z",
        "engagementCount": 1142
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-20T00:00:00.000Z",
        "engagementCount": 1180
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-20T00:00:00.000Z",
        "engagementCount": 1040
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-21T00:00:00.000Z",
        "engagementCount": 625
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-21T00:00:00.000Z",
        "engagementCount": 1144
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-21T00:00:00.000Z",
        "engagementCount": 884
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-21T00:00:00.000Z",
        "engagementCount": 1692
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-21T00:00:00.000Z",
        "engagementCount": 1933
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-22T00:00:00.000Z",
        "engagementCount": 492
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-22T00:00:00.000Z",
        "engagementCount": 1037
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-22T00:00:00.000Z",
        "engagementCount": 621
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-22T00:00:00.000Z",
        "engagementCount": 1299
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-22T00:00:00.000Z",
        "engagementCount": 1142
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-23T00:00:00.000Z",
        "engagementCount": 458
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-23T00:00:00.000Z",
        "engagementCount": 577
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-23T00:00:00.000Z",
        "engagementCount": 1132
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-23T00:00:00.000Z",
        "engagementCount": 1333
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-23T00:00:00.000Z",
        "engagementCount": 1824
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-24T00:00:00.000Z",
        "engagementCount": 912
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-24T00:00:00.000Z",
        "engagementCount": 719
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-24T00:00:00.000Z",
        "engagementCount": 1214
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-24T00:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-24T00:00:00.000Z",
        "engagementCount": 1222
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-25T00:00:00.000Z",
        "engagementCount": 608
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-25T00:00:00.000Z",
        "engagementCount": 604
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-25T00:00:00.000Z",
        "engagementCount": 1172
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-25T00:00:00.000Z",
        "engagementCount": 1422
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-25T00:00:00.000Z",
        "engagementCount": 842
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-26T00:00:00.000Z",
        "engagementCount": 475
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-26T00:00:00.000Z",
        "engagementCount": 803
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-26T00:00:00.000Z",
        "engagementCount": 805
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-26T00:00:00.000Z",
        "engagementCount": 1046
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-26T00:00:00.000Z",
        "engagementCount": 1334
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-27T00:00:00.000Z",
        "engagementCount": 770
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-27T00:00:00.000Z",
        "engagementCount": 974
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-27T00:00:00.000Z",
        "engagementCount": 791
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-27T00:00:00.000Z",
        "engagementCount": 857
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-27T00:00:00.000Z",
        "engagementCount": 1603
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-28T00:00:00.000Z",
        "engagementCount": 848
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-28T00:00:00.000Z",
        "engagementCount": 686
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-28T00:00:00.000Z",
        "engagementCount": 824
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-28T00:00:00.000Z",
        "engagementCount": 761
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-28T00:00:00.000Z",
        "engagementCount": 1974
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-29T00:00:00.000Z",
        "engagementCount": 1069
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-29T00:00:00.000Z",
        "engagementCount": 865
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-29T00:00:00.000Z",
        "engagementCount": 1034
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-29T00:00:00.000Z",
        "engagementCount": 982
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-29T00:00:00.000Z",
        "engagementCount": 1876
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-30T00:00:00.000Z",
        "engagementCount": 767
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-30T00:00:00.000Z",
        "engagementCount": 1209
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-30T00:00:00.000Z",
        "engagementCount": 792
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-30T00:00:00.000Z",
        "engagementCount": 1284
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-30T00:00:00.000Z",
        "engagementCount": 1234
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-01-31T00:00:00.000Z",
        "engagementCount": 687
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-01-31T00:00:00.000Z",
        "engagementCount": 1235
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-01-31T00:00:00.000Z",
        "engagementCount": 1273
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-01-31T00:00:00.000Z",
        "engagementCount": 1474
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-01-31T00:00:00.000Z",
        "engagementCount": 1711
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-01T00:00:00.000Z",
        "engagementCount": 843
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-01T00:00:00.000Z",
        "engagementCount": 663
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-01T00:00:00.000Z",
        "engagementCount": 1359
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-01T00:00:00.000Z",
        "engagementCount": 1256
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-01T00:00:00.000Z",
        "engagementCount": 1566
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-02T00:00:00.000Z",
        "engagementCount": 866
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-02T00:00:00.000Z",
        "engagementCount": 1142
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-02T00:00:00.000Z",
        "engagementCount": 1301
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-02T00:00:00.000Z",
        "engagementCount": 1410
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-02T00:00:00.000Z",
        "engagementCount": 1631
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-03T00:00:00.000Z",
        "engagementCount": 1222
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-03T00:00:00.000Z",
        "engagementCount": 1202
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-03T00:00:00.000Z",
        "engagementCount": 933
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-03T00:00:00.000Z",
        "engagementCount": 960
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-03T00:00:00.000Z",
        "engagementCount": 984
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-04T00:00:00.000Z",
        "engagementCount": 1466
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-04T00:00:00.000Z",
        "engagementCount": 674
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-04T00:00:00.000Z",
        "engagementCount": 1782
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-04T00:00:00.000Z",
        "engagementCount": 1078
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-04T00:00:00.000Z",
        "engagementCount": 2278
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-05T00:00:00.000Z",
        "engagementCount": 1167
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-05T00:00:00.000Z",
        "engagementCount": 1236
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-05T00:00:00.000Z",
        "engagementCount": 1470
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-05T00:00:00.000Z",
        "engagementCount": 1414
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-05T00:00:00.000Z",
        "engagementCount": 2050
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-06T00:00:00.000Z",
        "engagementCount": 1054
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-06T00:00:00.000Z",
        "engagementCount": 1278
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-06T00:00:00.000Z",
        "engagementCount": 1565
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-06T00:00:00.000Z",
        "engagementCount": 1466
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-06T00:00:00.000Z",
        "engagementCount": 836
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-07T00:00:00.000Z",
        "engagementCount": 921
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-07T00:00:00.000Z",
        "engagementCount": 865
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-07T00:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-07T00:00:00.000Z",
        "engagementCount": 791
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-07T00:00:00.000Z",
        "engagementCount": 1068
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-08T00:00:00.000Z",
        "engagementCount": 954
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-08T00:00:00.000Z",
        "engagementCount": 1527
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-08T00:00:00.000Z",
        "engagementCount": 1189
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-08T00:00:00.000Z",
        "engagementCount": 1957
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-08T00:00:00.000Z",
        "engagementCount": 1594
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-09T00:00:00.000Z",
        "engagementCount": 770
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-09T00:00:00.000Z",
        "engagementCount": 833
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-09T00:00:00.000Z",
        "engagementCount": 672
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-09T00:00:00.000Z",
        "engagementCount": 1724
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-09T00:00:00.000Z",
        "engagementCount": 1693
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-10T00:00:00.000Z",
        "engagementCount": 546
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-10T00:00:00.000Z",
        "engagementCount": 1326
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-10T00:00:00.000Z",
        "engagementCount": 812
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-10T00:00:00.000Z",
        "engagementCount": 925
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-10T00:00:00.000Z",
        "engagementCount": 2267
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-11T00:00:00.000Z",
        "engagementCount": 1028
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-11T00:00:00.000Z",
        "engagementCount": 597
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-11T00:00:00.000Z",
        "engagementCount": 1637
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-11T00:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-11T00:00:00.000Z",
        "engagementCount": 774
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-12T00:00:00.000Z",
        "engagementCount": 1399
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-12T00:00:00.000Z",
        "engagementCount": 1374
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-12T00:00:00.000Z",
        "engagementCount": 753
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-12T00:00:00.000Z",
        "engagementCount": 881
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-12T00:00:00.000Z",
        "engagementCount": 1739
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-13T00:00:00.000Z",
        "engagementCount": 1443
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-13T00:00:00.000Z",
        "engagementCount": 1321
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-13T00:00:00.000Z",
        "engagementCount": 1873
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-13T00:00:00.000Z",
        "engagementCount": 1101
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-13T00:00:00.000Z",
        "engagementCount": 1919
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-14T00:00:00.000Z",
        "engagementCount": 1420
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-14T00:00:00.000Z",
        "engagementCount": 751
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-14T00:00:00.000Z",
        "engagementCount": 1375
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-14T00:00:00.000Z",
        "engagementCount": 1867
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-14T00:00:00.000Z",
        "engagementCount": 1511
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-15T00:00:00.000Z",
        "engagementCount": 1438
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-15T00:00:00.000Z",
        "engagementCount": 805
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-15T00:00:00.000Z",
        "engagementCount": 1529
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-15T00:00:00.000Z",
        "engagementCount": 1090
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-15T00:00:00.000Z",
        "engagementCount": 1012
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-16T00:00:00.000Z",
        "engagementCount": 836
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-16T00:00:00.000Z",
        "engagementCount": 1690
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-16T00:00:00.000Z",
        "engagementCount": 1849
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-16T00:00:00.000Z",
        "engagementCount": 2017
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-16T00:00:00.000Z",
        "engagementCount": 2283
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-17T00:00:00.000Z",
        "engagementCount": 695
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-17T00:00:00.000Z",
        "engagementCount": 866
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-17T00:00:00.000Z",
        "engagementCount": 708
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-17T00:00:00.000Z",
        "engagementCount": 834
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-17T00:00:00.000Z",
        "engagementCount": 2149
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-18T00:00:00.000Z",
        "engagementCount": 1512
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-18T00:00:00.000Z",
        "engagementCount": 1679
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-18T00:00:00.000Z",
        "engagementCount": 747
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-18T00:00:00.000Z",
        "engagementCount": 780
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-18T00:00:00.000Z",
        "engagementCount": 1606
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-19T00:00:00.000Z",
        "engagementCount": 1055
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-19T00:00:00.000Z",
        "engagementCount": 1094
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-19T00:00:00.000Z",
        "engagementCount": 1424
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-19T00:00:00.000Z",
        "engagementCount": 887
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-19T00:00:00.000Z",
        "engagementCount": 1818
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-20T00:00:00.000Z",
        "engagementCount": 745
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-20T00:00:00.000Z",
        "engagementCount": 1479
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-20T00:00:00.000Z",
        "engagementCount": 1418
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-20T00:00:00.000Z",
        "engagementCount": 1250
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-20T00:00:00.000Z",
        "engagementCount": 1786
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-21T00:00:00.000Z",
        "engagementCount": 1180
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-21T00:00:00.000Z",
        "engagementCount": 1049
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-21T00:00:00.000Z",
        "engagementCount": 1343
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-21T00:00:00.000Z",
        "engagementCount": 826
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-21T00:00:00.000Z",
        "engagementCount": 877
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-22T00:00:00.000Z",
        "engagementCount": 741
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-22T00:00:00.000Z",
        "engagementCount": 1464
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-22T00:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-22T00:00:00.000Z",
        "engagementCount": 889
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-22T00:00:00.000Z",
        "engagementCount": 1403
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-23T00:00:00.000Z",
        "engagementCount": 1348
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-23T00:00:00.000Z",
        "engagementCount": 610
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-23T00:00:00.000Z",
        "engagementCount": 944
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-23T00:00:00.000Z",
        "engagementCount": 1882
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-23T00:00:00.000Z",
        "engagementCount": 1008
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-24T00:00:00.000Z",
        "engagementCount": 930
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-24T00:00:00.000Z",
        "engagementCount": 803
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-24T00:00:00.000Z",
        "engagementCount": 1625
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-24T00:00:00.000Z",
        "engagementCount": 1260
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-24T00:00:00.000Z",
        "engagementCount": 2182
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-25T00:00:00.000Z",
        "engagementCount": 1256
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-25T00:00:00.000Z",
        "engagementCount": 1415
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-25T00:00:00.000Z",
        "engagementCount": 1675
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-25T00:00:00.000Z",
        "engagementCount": 726
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-25T00:00:00.000Z",
        "engagementCount": 1051
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-26T00:00:00.000Z",
        "engagementCount": 702
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-26T00:00:00.000Z",
        "engagementCount": 586
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-26T00:00:00.000Z",
        "engagementCount": 894
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-26T00:00:00.000Z",
        "engagementCount": 1856
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-26T00:00:00.000Z",
        "engagementCount": 1034
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-27T00:00:00.000Z",
        "engagementCount": 1151
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-27T00:00:00.000Z",
        "engagementCount": 580
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-27T00:00:00.000Z",
        "engagementCount": 1026
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-27T00:00:00.000Z",
        "engagementCount": 1355
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-27T00:00:00.000Z",
        "engagementCount": 1391
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-28T00:00:00.000Z",
        "engagementCount": 1441
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-28T00:00:00.000Z",
        "engagementCount": 909
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-28T00:00:00.000Z",
        "engagementCount": 1739
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-28T00:00:00.000Z",
        "engagementCount": 1887
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-28T00:00:00.000Z",
        "engagementCount": 1324
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-02-29T00:00:00.000Z",
        "engagementCount": 543
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-02-29T00:00:00.000Z",
        "engagementCount": 1640
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-02-29T00:00:00.000Z",
        "engagementCount": 1688
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-02-29T00:00:00.000Z",
        "engagementCount": 833
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-02-29T00:00:00.000Z",
        "engagementCount": 2036
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 998
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 1332
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 1277
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 914
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 1009
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1307
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1472
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1574
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1999
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1313
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 1535
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 1108
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 1785
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 2188
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-01T00:00:00.000Z",
        "engagementCount": 1572
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 901
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1525
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1367
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 954
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-02T00:00:00.000Z",
        "engagementCount": 1388
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-03T00:00:00.000Z",
        "engagementCount": 824
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-03T00:00:00.000Z",
        "engagementCount": 1825
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-03T00:00:00.000Z",
        "engagementCount": 1142
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-03T00:00:00.000Z",
        "engagementCount": 1463
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-03T00:00:00.000Z",
        "engagementCount": 1173
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-04T00:00:00.000Z",
        "engagementCount": 1674
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-04T00:00:00.000Z",
        "engagementCount": 992
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-04T00:00:00.000Z",
        "engagementCount": 1604
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-04T00:00:00.000Z",
        "engagementCount": 824
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-04T00:00:00.000Z",
        "engagementCount": 2158
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-05T00:00:00.000Z",
        "engagementCount": 1431
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-05T00:00:00.000Z",
        "engagementCount": 870
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-05T00:00:00.000Z",
        "engagementCount": 828
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-05T00:00:00.000Z",
        "engagementCount": 2163
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-05T00:00:00.000Z",
        "engagementCount": 1104
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-06T00:00:00.000Z",
        "engagementCount": 1634
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-06T00:00:00.000Z",
        "engagementCount": 1382
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-06T00:00:00.000Z",
        "engagementCount": 1601
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-06T00:00:00.000Z",
        "engagementCount": 1649
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-06T00:00:00.000Z",
        "engagementCount": 2053
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-07T00:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-07T00:00:00.000Z",
        "engagementCount": 1932
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-07T00:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-07T00:00:00.000Z",
        "engagementCount": 2057
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-07T00:00:00.000Z",
        "engagementCount": 1110
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-08T00:00:00.000Z",
        "engagementCount": 712
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-08T00:00:00.000Z",
        "engagementCount": 944
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-08T00:00:00.000Z",
        "engagementCount": 1775
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-08T00:00:00.000Z",
        "engagementCount": 1423
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-08T00:00:00.000Z",
        "engagementCount": 1948
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-09T00:00:00.000Z",
        "engagementCount": 1347
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-09T00:00:00.000Z",
        "engagementCount": 1737
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-09T00:00:00.000Z",
        "engagementCount": 2114
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-09T00:00:00.000Z",
        "engagementCount": 1434
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-09T00:00:00.000Z",
        "engagementCount": 974
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-10T00:00:00.000Z",
        "engagementCount": 1495
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-10T00:00:00.000Z",
        "engagementCount": 1663
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-10T00:00:00.000Z",
        "engagementCount": 968
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-10T00:00:00.000Z",
        "engagementCount": 1984
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-10T00:00:00.000Z",
        "engagementCount": 1565
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-11T00:00:00.000Z",
        "engagementCount": 1536
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-11T00:00:00.000Z",
        "engagementCount": 1207
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-11T00:00:00.000Z",
        "engagementCount": 2138
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-11T00:00:00.000Z",
        "engagementCount": 2326
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-11T00:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-12T00:00:00.000Z",
        "engagementCount": 772
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-12T00:00:00.000Z",
        "engagementCount": 803
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-12T00:00:00.000Z",
        "engagementCount": 1947
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-12T00:00:00.000Z",
        "engagementCount": 2245
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-12T00:00:00.000Z",
        "engagementCount": 890
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-13T00:00:00.000Z",
        "engagementCount": 871
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-13T00:00:00.000Z",
        "engagementCount": 1912
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-13T00:00:00.000Z",
        "engagementCount": 2066
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-13T00:00:00.000Z",
        "engagementCount": 1751
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-13T00:00:00.000Z",
        "engagementCount": 2089
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-14T00:00:00.000Z",
        "engagementCount": 1442
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-14T00:00:00.000Z",
        "engagementCount": 1537
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-14T00:00:00.000Z",
        "engagementCount": 1217
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-14T00:00:00.000Z",
        "engagementCount": 2007
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-14T00:00:00.000Z",
        "engagementCount": 2049
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-15T00:00:00.000Z",
        "engagementCount": 1521
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-15T00:00:00.000Z",
        "engagementCount": 1580
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-15T00:00:00.000Z",
        "engagementCount": 847
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-15T00:00:00.000Z",
        "engagementCount": 2221
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-15T00:00:00.000Z",
        "engagementCount": 2070
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-16T00:00:00.000Z",
        "engagementCount": 1509
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-16T00:00:00.000Z",
        "engagementCount": 1072
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-16T00:00:00.000Z",
        "engagementCount": 1176
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-16T00:00:00.000Z",
        "engagementCount": 2056
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-16T00:00:00.000Z",
        "engagementCount": 2533
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-17T00:00:00.000Z",
        "engagementCount": 1146
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-17T00:00:00.000Z",
        "engagementCount": 732
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-17T00:00:00.000Z",
        "engagementCount": 918
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-17T00:00:00.000Z",
        "engagementCount": 1107
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-17T00:00:00.000Z",
        "engagementCount": 1196
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-18T00:00:00.000Z",
        "engagementCount": 1673
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-18T00:00:00.000Z",
        "engagementCount": 1208
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-18T00:00:00.000Z",
        "engagementCount": 1485
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-18T00:00:00.000Z",
        "engagementCount": 2175
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-18T00:00:00.000Z",
        "engagementCount": 1898
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-19T00:00:00.000Z",
        "engagementCount": 1609
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-19T00:00:00.000Z",
        "engagementCount": 1357
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-19T00:00:00.000Z",
        "engagementCount": 1446
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-19T00:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-19T00:00:00.000Z",
        "engagementCount": 2318
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-20T00:00:00.000Z",
        "engagementCount": 1603
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-20T00:00:00.000Z",
        "engagementCount": 1190
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-20T00:00:00.000Z",
        "engagementCount": 1331
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-20T00:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-20T00:00:00.000Z",
        "engagementCount": 2309
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-21T00:00:00.000Z",
        "engagementCount": 634
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-21T00:00:00.000Z",
        "engagementCount": 1805
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-21T00:00:00.000Z",
        "engagementCount": 1798
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-21T00:00:00.000Z",
        "engagementCount": 1158
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-21T00:00:00.000Z",
        "engagementCount": 2392
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-22T00:00:00.000Z",
        "engagementCount": 1131
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-22T00:00:00.000Z",
        "engagementCount": 1931
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-22T00:00:00.000Z",
        "engagementCount": 798
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-22T00:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-22T00:00:00.000Z",
        "engagementCount": 1654
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-23T00:00:00.000Z",
        "engagementCount": 1577
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-23T00:00:00.000Z",
        "engagementCount": 964
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-23T00:00:00.000Z",
        "engagementCount": 903
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-23T00:00:00.000Z",
        "engagementCount": 2145
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-23T00:00:00.000Z",
        "engagementCount": 2348
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-24T00:00:00.000Z",
        "engagementCount": 1631
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-24T00:00:00.000Z",
        "engagementCount": 1934
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-24T00:00:00.000Z",
        "engagementCount": 1291
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-24T00:00:00.000Z",
        "engagementCount": 1271
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-24T00:00:00.000Z",
        "engagementCount": 1261
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-25T00:00:00.000Z",
        "engagementCount": 1677
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-25T00:00:00.000Z",
        "engagementCount": 1649
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-25T00:00:00.000Z",
        "engagementCount": 984
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-25T00:00:00.000Z",
        "engagementCount": 888
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-25T00:00:00.000Z",
        "engagementCount": 1603
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-26T00:00:00.000Z",
        "engagementCount": 1648
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-26T00:00:00.000Z",
        "engagementCount": 1720
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-26T00:00:00.000Z",
        "engagementCount": 1849
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-26T00:00:00.000Z",
        "engagementCount": 1556
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-26T00:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-27T00:00:00.000Z",
        "engagementCount": 1518
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-27T00:00:00.000Z",
        "engagementCount": 1406
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-27T00:00:00.000Z",
        "engagementCount": 1590
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-27T00:00:00.000Z",
        "engagementCount": 1654
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-27T00:00:00.000Z",
        "engagementCount": 1188
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-28T00:00:00.000Z",
        "engagementCount": 640
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-28T00:00:00.000Z",
        "engagementCount": 1768
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-28T00:00:00.000Z",
        "engagementCount": 1922
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-28T00:00:00.000Z",
        "engagementCount": 828
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-28T00:00:00.000Z",
        "engagementCount": 1899
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-29T00:00:00.000Z",
        "engagementCount": 1578
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-29T00:00:00.000Z",
        "engagementCount": 697
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-29T00:00:00.000Z",
        "engagementCount": 1049
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-29T00:00:00.000Z",
        "engagementCount": 2353
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-29T00:00:00.000Z",
        "engagementCount": 1695
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-03-31T23:00:00.000Z",
        "engagementCount": 893
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-03-31T23:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-03-31T23:00:00.000Z",
        "engagementCount": 2095
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-03-31T23:00:00.000Z",
        "engagementCount": 2370
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-03-31T23:00:00.000Z",
        "engagementCount": 2203
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-01T23:00:00.000Z",
        "engagementCount": 1538
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-01T23:00:00.000Z",
        "engagementCount": 1599
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-01T23:00:00.000Z",
        "engagementCount": 2083
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-01T23:00:00.000Z",
        "engagementCount": 1001
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-01T23:00:00.000Z",
        "engagementCount": 2815
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-02T23:00:00.000Z",
        "engagementCount": 1303
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-02T23:00:00.000Z",
        "engagementCount": 1177
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-02T23:00:00.000Z",
        "engagementCount": 2387
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-02T23:00:00.000Z",
        "engagementCount": 2088
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-02T23:00:00.000Z",
        "engagementCount": 1927
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-03T23:00:00.000Z",
        "engagementCount": 996
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-03T23:00:00.000Z",
        "engagementCount": 1298
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-03T23:00:00.000Z",
        "engagementCount": 2133
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-03T23:00:00.000Z",
        "engagementCount": 1673
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-03T23:00:00.000Z",
        "engagementCount": 2665
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-04T23:00:00.000Z",
        "engagementCount": 1854
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-04T23:00:00.000Z",
        "engagementCount": 1946
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-04T23:00:00.000Z",
        "engagementCount": 1154
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-04T23:00:00.000Z",
        "engagementCount": 1396
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-04T23:00:00.000Z",
        "engagementCount": 1772
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-05T23:00:00.000Z",
        "engagementCount": 1096
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-05T23:00:00.000Z",
        "engagementCount": 883
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-05T23:00:00.000Z",
        "engagementCount": 1214
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-05T23:00:00.000Z",
        "engagementCount": 2114
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-05T23:00:00.000Z",
        "engagementCount": 1954
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-06T23:00:00.000Z",
        "engagementCount": 1586
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-06T23:00:00.000Z",
        "engagementCount": 1685
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-06T23:00:00.000Z",
        "engagementCount": 1711
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-06T23:00:00.000Z",
        "engagementCount": 1166
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-06T23:00:00.000Z",
        "engagementCount": 1644
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-07T23:00:00.000Z",
        "engagementCount": 1314
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-07T23:00:00.000Z",
        "engagementCount": 1408
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-07T23:00:00.000Z",
        "engagementCount": 1003
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-07T23:00:00.000Z",
        "engagementCount": 2212
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-07T23:00:00.000Z",
        "engagementCount": 1422
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-08T23:00:00.000Z",
        "engagementCount": 919
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-08T23:00:00.000Z",
        "engagementCount": 732
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-08T23:00:00.000Z",
        "engagementCount": 2153
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-08T23:00:00.000Z",
        "engagementCount": 2154
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-08T23:00:00.000Z",
        "engagementCount": 2665
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-09T23:00:00.000Z",
        "engagementCount": 1266
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-09T23:00:00.000Z",
        "engagementCount": 1502
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-09T23:00:00.000Z",
        "engagementCount": 1195
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-09T23:00:00.000Z",
        "engagementCount": 1145
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-09T23:00:00.000Z",
        "engagementCount": 1408
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-10T23:00:00.000Z",
        "engagementCount": 1892
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-10T23:00:00.000Z",
        "engagementCount": 1790
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-10T23:00:00.000Z",
        "engagementCount": 870
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-10T23:00:00.000Z",
        "engagementCount": 2170
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-10T23:00:00.000Z",
        "engagementCount": 2643
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-11T23:00:00.000Z",
        "engagementCount": 1154
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-11T23:00:00.000Z",
        "engagementCount": 2007
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-11T23:00:00.000Z",
        "engagementCount": 1863
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-11T23:00:00.000Z",
        "engagementCount": 1896
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-11T23:00:00.000Z",
        "engagementCount": 1136
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-12T23:00:00.000Z",
        "engagementCount": 841
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-12T23:00:00.000Z",
        "engagementCount": 803
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-12T23:00:00.000Z",
        "engagementCount": 1472
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-12T23:00:00.000Z",
        "engagementCount": 1053
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-12T23:00:00.000Z",
        "engagementCount": 2676
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-13T23:00:00.000Z",
        "engagementCount": 780
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-13T23:00:00.000Z",
        "engagementCount": 720
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-13T23:00:00.000Z",
        "engagementCount": 1640
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-13T23:00:00.000Z",
        "engagementCount": 2137
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-13T23:00:00.000Z",
        "engagementCount": 1137
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-14T23:00:00.000Z",
        "engagementCount": 867
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-14T23:00:00.000Z",
        "engagementCount": 2017
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-14T23:00:00.000Z",
        "engagementCount": 868
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-14T23:00:00.000Z",
        "engagementCount": 1124
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-14T23:00:00.000Z",
        "engagementCount": 1240
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-15T23:00:00.000Z",
        "engagementCount": 1179
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-15T23:00:00.000Z",
        "engagementCount": 1963
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-15T23:00:00.000Z",
        "engagementCount": 1792
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-15T23:00:00.000Z",
        "engagementCount": 1710
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-15T23:00:00.000Z",
        "engagementCount": 1768
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-16T23:00:00.000Z",
        "engagementCount": 1711
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-16T23:00:00.000Z",
        "engagementCount": 1737
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-16T23:00:00.000Z",
        "engagementCount": 1154
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-16T23:00:00.000Z",
        "engagementCount": 1829
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-16T23:00:00.000Z",
        "engagementCount": 1733
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-17T23:00:00.000Z",
        "engagementCount": 1383
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-17T23:00:00.000Z",
        "engagementCount": 1879
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-17T23:00:00.000Z",
        "engagementCount": 2319
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-17T23:00:00.000Z",
        "engagementCount": 2484
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-17T23:00:00.000Z",
        "engagementCount": 1220
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-18T23:00:00.000Z",
        "engagementCount": 955
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-18T23:00:00.000Z",
        "engagementCount": 2011
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-18T23:00:00.000Z",
        "engagementCount": 1056
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-18T23:00:00.000Z",
        "engagementCount": 2116
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-18T23:00:00.000Z",
        "engagementCount": 2287
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-19T23:00:00.000Z",
        "engagementCount": 1630
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-19T23:00:00.000Z",
        "engagementCount": 1227
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-19T23:00:00.000Z",
        "engagementCount": 1041
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-19T23:00:00.000Z",
        "engagementCount": 1861
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-19T23:00:00.000Z",
        "engagementCount": 2449
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-20T23:00:00.000Z",
        "engagementCount": 765
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-20T23:00:00.000Z",
        "engagementCount": 1507
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-20T23:00:00.000Z",
        "engagementCount": 1870
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-20T23:00:00.000Z",
        "engagementCount": 1544
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-20T23:00:00.000Z",
        "engagementCount": 1320
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-21T23:00:00.000Z",
        "engagementCount": 1909
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-21T23:00:00.000Z",
        "engagementCount": 1753
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-21T23:00:00.000Z",
        "engagementCount": 1593
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-21T23:00:00.000Z",
        "engagementCount": 1471
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-21T23:00:00.000Z",
        "engagementCount": 2121
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-22T23:00:00.000Z",
        "engagementCount": 812
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-22T23:00:00.000Z",
        "engagementCount": 1171
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-22T23:00:00.000Z",
        "engagementCount": 863
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-22T23:00:00.000Z",
        "engagementCount": 1146
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-22T23:00:00.000Z",
        "engagementCount": 1944
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-23T23:00:00.000Z",
        "engagementCount": 1678
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-23T23:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-23T23:00:00.000Z",
        "engagementCount": 1938
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-23T23:00:00.000Z",
        "engagementCount": 1013
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-23T23:00:00.000Z",
        "engagementCount": 1578
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-24T23:00:00.000Z",
        "engagementCount": 972
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-24T23:00:00.000Z",
        "engagementCount": 844
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-24T23:00:00.000Z",
        "engagementCount": 1477
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-24T23:00:00.000Z",
        "engagementCount": 1196
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-24T23:00:00.000Z",
        "engagementCount": 1698
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-25T23:00:00.000Z",
        "engagementCount": 946
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-25T23:00:00.000Z",
        "engagementCount": 1161
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-25T23:00:00.000Z",
        "engagementCount": 1995
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-25T23:00:00.000Z",
        "engagementCount": 1703
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-25T23:00:00.000Z",
        "engagementCount": 2089
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-26T23:00:00.000Z",
        "engagementCount": 796
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-26T23:00:00.000Z",
        "engagementCount": 1774
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-26T23:00:00.000Z",
        "engagementCount": 921
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-26T23:00:00.000Z",
        "engagementCount": 1518
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-26T23:00:00.000Z",
        "engagementCount": 2608
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-27T23:00:00.000Z",
        "engagementCount": 1687
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-27T23:00:00.000Z",
        "engagementCount": 1799
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-27T23:00:00.000Z",
        "engagementCount": 2283
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-27T23:00:00.000Z",
        "engagementCount": 2358
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-27T23:00:00.000Z",
        "engagementCount": 1754
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-28T23:00:00.000Z",
        "engagementCount": 1767
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-28T23:00:00.000Z",
        "engagementCount": 1708
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-28T23:00:00.000Z",
        "engagementCount": 1415
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-28T23:00:00.000Z",
        "engagementCount": 2510
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-28T23:00:00.000Z",
        "engagementCount": 1181
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-29T23:00:00.000Z",
        "engagementCount": 1910
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-29T23:00:00.000Z",
        "engagementCount": 1326
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-29T23:00:00.000Z",
        "engagementCount": 2279
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-29T23:00:00.000Z",
        "engagementCount": 2502
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-29T23:00:00.000Z",
        "engagementCount": 1824
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 1761
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 1648
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 1664
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 1364
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 2602
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 1029
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 2197
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 1959
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 1587
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-04-30T23:00:00.000Z",
        "engagementCount": 2294
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-01T23:00:00.000Z",
        "engagementCount": 897
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-01T23:00:00.000Z",
        "engagementCount": 2244
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-01T23:00:00.000Z",
        "engagementCount": 1464
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-01T23:00:00.000Z",
        "engagementCount": 1084
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-01T23:00:00.000Z",
        "engagementCount": 2340
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-02T23:00:00.000Z",
        "engagementCount": 1371
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-02T23:00:00.000Z",
        "engagementCount": 1561
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-02T23:00:00.000Z",
        "engagementCount": 887
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-02T23:00:00.000Z",
        "engagementCount": 1360
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-02T23:00:00.000Z",
        "engagementCount": 1313
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-03T23:00:00.000Z",
        "engagementCount": 2096
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-03T23:00:00.000Z",
        "engagementCount": 1452
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-03T23:00:00.000Z",
        "engagementCount": 1254
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-03T23:00:00.000Z",
        "engagementCount": 1972
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-03T23:00:00.000Z",
        "engagementCount": 2122
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-04T23:00:00.000Z",
        "engagementCount": 1734
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-04T23:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-04T23:00:00.000Z",
        "engagementCount": 1011
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-04T23:00:00.000Z",
        "engagementCount": 2610
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-04T23:00:00.000Z",
        "engagementCount": 1784
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-05T23:00:00.000Z",
        "engagementCount": 2012
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-05T23:00:00.000Z",
        "engagementCount": 1536
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-05T23:00:00.000Z",
        "engagementCount": 1810
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-05T23:00:00.000Z",
        "engagementCount": 973
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-05T23:00:00.000Z",
        "engagementCount": 2017
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-06T23:00:00.000Z",
        "engagementCount": 1650
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-06T23:00:00.000Z",
        "engagementCount": 1561
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-06T23:00:00.000Z",
        "engagementCount": 1181
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-06T23:00:00.000Z",
        "engagementCount": 1397
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-06T23:00:00.000Z",
        "engagementCount": 2284
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-07T23:00:00.000Z",
        "engagementCount": 1618
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-07T23:00:00.000Z",
        "engagementCount": 2298
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-07T23:00:00.000Z",
        "engagementCount": 2119
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-07T23:00:00.000Z",
        "engagementCount": 1851
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-07T23:00:00.000Z",
        "engagementCount": 1173
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-08T23:00:00.000Z",
        "engagementCount": 1930
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-08T23:00:00.000Z",
        "engagementCount": 865
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-08T23:00:00.000Z",
        "engagementCount": 926
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-08T23:00:00.000Z",
        "engagementCount": 1324
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-08T23:00:00.000Z",
        "engagementCount": 1272
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-09T23:00:00.000Z",
        "engagementCount": 1374
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-09T23:00:00.000Z",
        "engagementCount": 1681
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-09T23:00:00.000Z",
        "engagementCount": 1326
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-09T23:00:00.000Z",
        "engagementCount": 2255
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-09T23:00:00.000Z",
        "engagementCount": 2610
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-10T23:00:00.000Z",
        "engagementCount": 1994
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-10T23:00:00.000Z",
        "engagementCount": 1388
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-10T23:00:00.000Z",
        "engagementCount": 1183
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-10T23:00:00.000Z",
        "engagementCount": 1308
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-10T23:00:00.000Z",
        "engagementCount": 2991
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-11T23:00:00.000Z",
        "engagementCount": 1775
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-11T23:00:00.000Z",
        "engagementCount": 1325
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-11T23:00:00.000Z",
        "engagementCount": 899
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-11T23:00:00.000Z",
        "engagementCount": 1457
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-11T23:00:00.000Z",
        "engagementCount": 1819
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-12T23:00:00.000Z",
        "engagementCount": 970
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-12T23:00:00.000Z",
        "engagementCount": 2026
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-12T23:00:00.000Z",
        "engagementCount": 1455
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-12T23:00:00.000Z",
        "engagementCount": 1434
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-12T23:00:00.000Z",
        "engagementCount": 1935
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-13T23:00:00.000Z",
        "engagementCount": 1635
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-13T23:00:00.000Z",
        "engagementCount": 2034
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-13T23:00:00.000Z",
        "engagementCount": 2158
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-13T23:00:00.000Z",
        "engagementCount": 1025
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-13T23:00:00.000Z",
        "engagementCount": 2432
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-14T23:00:00.000Z",
        "engagementCount": 1575
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-14T23:00:00.000Z",
        "engagementCount": 1259
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-14T23:00:00.000Z",
        "engagementCount": 1740
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-14T23:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-14T23:00:00.000Z",
        "engagementCount": 1958
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-15T23:00:00.000Z",
        "engagementCount": 1938
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-15T23:00:00.000Z",
        "engagementCount": 840
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-15T23:00:00.000Z",
        "engagementCount": 2030
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-15T23:00:00.000Z",
        "engagementCount": 1436
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-15T23:00:00.000Z",
        "engagementCount": 1437
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-16T23:00:00.000Z",
        "engagementCount": 1232
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-16T23:00:00.000Z",
        "engagementCount": 2198
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-16T23:00:00.000Z",
        "engagementCount": 1243
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-16T23:00:00.000Z",
        "engagementCount": 1088
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-16T23:00:00.000Z",
        "engagementCount": 1704
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-17T23:00:00.000Z",
        "engagementCount": 1893
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-17T23:00:00.000Z",
        "engagementCount": 1765
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-17T23:00:00.000Z",
        "engagementCount": 1878
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-17T23:00:00.000Z",
        "engagementCount": 2329
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-17T23:00:00.000Z",
        "engagementCount": 3018
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-18T23:00:00.000Z",
        "engagementCount": 2037
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-18T23:00:00.000Z",
        "engagementCount": 2086
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-18T23:00:00.000Z",
        "engagementCount": 2370
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-18T23:00:00.000Z",
        "engagementCount": 2137
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-18T23:00:00.000Z",
        "engagementCount": 1736
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-19T23:00:00.000Z",
        "engagementCount": 1989
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-19T23:00:00.000Z",
        "engagementCount": 2132
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-19T23:00:00.000Z",
        "engagementCount": 1839
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-19T23:00:00.000Z",
        "engagementCount": 2510
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-19T23:00:00.000Z",
        "engagementCount": 2936
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-20T23:00:00.000Z",
        "engagementCount": 973
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-20T23:00:00.000Z",
        "engagementCount": 1804
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-20T23:00:00.000Z",
        "engagementCount": 1816
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-20T23:00:00.000Z",
        "engagementCount": 1724
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-20T23:00:00.000Z",
        "engagementCount": 2682
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-21T23:00:00.000Z",
        "engagementCount": 1863
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-21T23:00:00.000Z",
        "engagementCount": 884
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-21T23:00:00.000Z",
        "engagementCount": 1964
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-21T23:00:00.000Z",
        "engagementCount": 2515
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-21T23:00:00.000Z",
        "engagementCount": 2095
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-22T23:00:00.000Z",
        "engagementCount": 1987
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-22T23:00:00.000Z",
        "engagementCount": 835
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-22T23:00:00.000Z",
        "engagementCount": 1188
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-22T23:00:00.000Z",
        "engagementCount": 2355
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-22T23:00:00.000Z",
        "engagementCount": 1987
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-23T23:00:00.000Z",
        "engagementCount": 1543
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-23T23:00:00.000Z",
        "engagementCount": 1399
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-23T23:00:00.000Z",
        "engagementCount": 2187
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-23T23:00:00.000Z",
        "engagementCount": 978
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-23T23:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-24T23:00:00.000Z",
        "engagementCount": 1601
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-24T23:00:00.000Z",
        "engagementCount": 1647
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-24T23:00:00.000Z",
        "engagementCount": 1622
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-24T23:00:00.000Z",
        "engagementCount": 2450
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-24T23:00:00.000Z",
        "engagementCount": 2122
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-25T23:00:00.000Z",
        "engagementCount": 1872
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-25T23:00:00.000Z",
        "engagementCount": 1214
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-25T23:00:00.000Z",
        "engagementCount": 1675
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-25T23:00:00.000Z",
        "engagementCount": 973
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-25T23:00:00.000Z",
        "engagementCount": 1542
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-26T23:00:00.000Z",
        "engagementCount": 1580
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-26T23:00:00.000Z",
        "engagementCount": 1200
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-26T23:00:00.000Z",
        "engagementCount": 1884
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-26T23:00:00.000Z",
        "engagementCount": 2295
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-26T23:00:00.000Z",
        "engagementCount": 2333
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-27T23:00:00.000Z",
        "engagementCount": 1422
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-27T23:00:00.000Z",
        "engagementCount": 1246
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-27T23:00:00.000Z",
        "engagementCount": 1619
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-27T23:00:00.000Z",
        "engagementCount": 2564
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-27T23:00:00.000Z",
        "engagementCount": 1773
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-28T23:00:00.000Z",
        "engagementCount": 1746
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-28T23:00:00.000Z",
        "engagementCount": 1037
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-28T23:00:00.000Z",
        "engagementCount": 2187
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-28T23:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-28T23:00:00.000Z",
        "engagementCount": 1847
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-29T23:00:00.000Z",
        "engagementCount": 1541
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-29T23:00:00.000Z",
        "engagementCount": 1431
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-29T23:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-29T23:00:00.000Z",
        "engagementCount": 2874
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-29T23:00:00.000Z",
        "engagementCount": 1937
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-05-31T23:00:00.000Z",
        "engagementCount": 1803
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-05-31T23:00:00.000Z",
        "engagementCount": 2316
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-05-31T23:00:00.000Z",
        "engagementCount": 1652
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-05-31T23:00:00.000Z",
        "engagementCount": 1959
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-05-31T23:00:00.000Z",
        "engagementCount": 3120
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-01T23:00:00.000Z",
        "engagementCount": 1992
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-01T23:00:00.000Z",
        "engagementCount": 1604
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-01T23:00:00.000Z",
        "engagementCount": 997
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-01T23:00:00.000Z",
        "engagementCount": 2443
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-01T23:00:00.000Z",
        "engagementCount": 1883
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-02T23:00:00.000Z",
        "engagementCount": 1134
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-02T23:00:00.000Z",
        "engagementCount": 953
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-02T23:00:00.000Z",
        "engagementCount": 1728
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-02T23:00:00.000Z",
        "engagementCount": 2998
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-02T23:00:00.000Z",
        "engagementCount": 1454
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-03T23:00:00.000Z",
        "engagementCount": 1725
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-03T23:00:00.000Z",
        "engagementCount": 1133
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-03T23:00:00.000Z",
        "engagementCount": 2377
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-03T23:00:00.000Z",
        "engagementCount": 3015
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-03T23:00:00.000Z",
        "engagementCount": 2093
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-04T23:00:00.000Z",
        "engagementCount": 2269
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-04T23:00:00.000Z",
        "engagementCount": 2114
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-04T23:00:00.000Z",
        "engagementCount": 1606
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-04T23:00:00.000Z",
        "engagementCount": 2364
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-04T23:00:00.000Z",
        "engagementCount": 2011
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-05T23:00:00.000Z",
        "engagementCount": 2203
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-05T23:00:00.000Z",
        "engagementCount": 2505
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-05T23:00:00.000Z",
        "engagementCount": 1284
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-05T23:00:00.000Z",
        "engagementCount": 3001
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-05T23:00:00.000Z",
        "engagementCount": 1919
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-06T23:00:00.000Z",
        "engagementCount": 1843
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-06T23:00:00.000Z",
        "engagementCount": 2126
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-06T23:00:00.000Z",
        "engagementCount": 2338
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-06T23:00:00.000Z",
        "engagementCount": 2310
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-06T23:00:00.000Z",
        "engagementCount": 3182
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-07T23:00:00.000Z",
        "engagementCount": 2019
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-07T23:00:00.000Z",
        "engagementCount": 1285
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-07T23:00:00.000Z",
        "engagementCount": 2474
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-07T23:00:00.000Z",
        "engagementCount": 2135
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-07T23:00:00.000Z",
        "engagementCount": 2668
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-08T23:00:00.000Z",
        "engagementCount": 1478
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-08T23:00:00.000Z",
        "engagementCount": 883
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-08T23:00:00.000Z",
        "engagementCount": 2133
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-08T23:00:00.000Z",
        "engagementCount": 2425
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-08T23:00:00.000Z",
        "engagementCount": 1288
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-09T23:00:00.000Z",
        "engagementCount": 1396
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-09T23:00:00.000Z",
        "engagementCount": 1289
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-09T23:00:00.000Z",
        "engagementCount": 2809
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-09T23:00:00.000Z",
        "engagementCount": 1253
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-09T23:00:00.000Z",
        "engagementCount": 2726
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-10T23:00:00.000Z",
        "engagementCount": 1820
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-10T23:00:00.000Z",
        "engagementCount": 1656
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-10T23:00:00.000Z",
        "engagementCount": 2122
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-10T23:00:00.000Z",
        "engagementCount": 2652
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-10T23:00:00.000Z",
        "engagementCount": 3450
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-11T23:00:00.000Z",
        "engagementCount": 1669
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-11T23:00:00.000Z",
        "engagementCount": 1796
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-11T23:00:00.000Z",
        "engagementCount": 2313
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-11T23:00:00.000Z",
        "engagementCount": 2100
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-11T23:00:00.000Z",
        "engagementCount": 1460
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-12T23:00:00.000Z",
        "engagementCount": 955
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-12T23:00:00.000Z",
        "engagementCount": 1557
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-12T23:00:00.000Z",
        "engagementCount": 1945
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-12T23:00:00.000Z",
        "engagementCount": 2602
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-12T23:00:00.000Z",
        "engagementCount": 3321
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-13T23:00:00.000Z",
        "engagementCount": 1350
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-13T23:00:00.000Z",
        "engagementCount": 2091
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-13T23:00:00.000Z",
        "engagementCount": 2574
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-13T23:00:00.000Z",
        "engagementCount": 1165
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-13T23:00:00.000Z",
        "engagementCount": 3163
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-14T23:00:00.000Z",
        "engagementCount": 2202
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-14T23:00:00.000Z",
        "engagementCount": 1702
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-14T23:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-14T23:00:00.000Z",
        "engagementCount": 1825
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-14T23:00:00.000Z",
        "engagementCount": 3095
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-15T23:00:00.000Z",
        "engagementCount": 1519
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-15T23:00:00.000Z",
        "engagementCount": 973
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-15T23:00:00.000Z",
        "engagementCount": 1238
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-15T23:00:00.000Z",
        "engagementCount": 3114
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-15T23:00:00.000Z",
        "engagementCount": 1555
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-16T23:00:00.000Z",
        "engagementCount": 901
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-16T23:00:00.000Z",
        "engagementCount": 2223
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-16T23:00:00.000Z",
        "engagementCount": 1338
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-16T23:00:00.000Z",
        "engagementCount": 1449
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-16T23:00:00.000Z",
        "engagementCount": 3105
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-17T23:00:00.000Z",
        "engagementCount": 1188
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-17T23:00:00.000Z",
        "engagementCount": 2204
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-17T23:00:00.000Z",
        "engagementCount": 2153
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-17T23:00:00.000Z",
        "engagementCount": 1507
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-17T23:00:00.000Z",
        "engagementCount": 3263
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-18T23:00:00.000Z",
        "engagementCount": 1285
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-18T23:00:00.000Z",
        "engagementCount": 1099
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-18T23:00:00.000Z",
        "engagementCount": 2617
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-18T23:00:00.000Z",
        "engagementCount": 1335
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-18T23:00:00.000Z",
        "engagementCount": 1341
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-19T23:00:00.000Z",
        "engagementCount": 1255
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-19T23:00:00.000Z",
        "engagementCount": 1712
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-19T23:00:00.000Z",
        "engagementCount": 1067
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-19T23:00:00.000Z",
        "engagementCount": 2825
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-19T23:00:00.000Z",
        "engagementCount": 3327
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-20T23:00:00.000Z",
        "engagementCount": 1079
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-20T23:00:00.000Z",
        "engagementCount": 1006
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-20T23:00:00.000Z",
        "engagementCount": 990
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-20T23:00:00.000Z",
        "engagementCount": 1243
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-20T23:00:00.000Z",
        "engagementCount": 2191
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-21T23:00:00.000Z",
        "engagementCount": 1227
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-21T23:00:00.000Z",
        "engagementCount": 1347
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-21T23:00:00.000Z",
        "engagementCount": 1922
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-21T23:00:00.000Z",
        "engagementCount": 1394
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-21T23:00:00.000Z",
        "engagementCount": 2209
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-22T23:00:00.000Z",
        "engagementCount": 2068
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-22T23:00:00.000Z",
        "engagementCount": 2125
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-22T23:00:00.000Z",
        "engagementCount": 2569
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-22T23:00:00.000Z",
        "engagementCount": 2892
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-22T23:00:00.000Z",
        "engagementCount": 2328
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-23T23:00:00.000Z",
        "engagementCount": 846
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-23T23:00:00.000Z",
        "engagementCount": 1596
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-23T23:00:00.000Z",
        "engagementCount": 1326
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-23T23:00:00.000Z",
        "engagementCount": 1133
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-23T23:00:00.000Z",
        "engagementCount": 2822
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-24T23:00:00.000Z",
        "engagementCount": 1830
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-24T23:00:00.000Z",
        "engagementCount": 1291
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-24T23:00:00.000Z",
        "engagementCount": 1666
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-24T23:00:00.000Z",
        "engagementCount": 1441
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-24T23:00:00.000Z",
        "engagementCount": 2355
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-25T23:00:00.000Z",
        "engagementCount": 1543
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-25T23:00:00.000Z",
        "engagementCount": 868
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-25T23:00:00.000Z",
        "engagementCount": 2074
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-25T23:00:00.000Z",
        "engagementCount": 1874
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-25T23:00:00.000Z",
        "engagementCount": 3039
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-26T23:00:00.000Z",
        "engagementCount": 1466
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-26T23:00:00.000Z",
        "engagementCount": 2021
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-26T23:00:00.000Z",
        "engagementCount": 1301
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-26T23:00:00.000Z",
        "engagementCount": 2779
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-26T23:00:00.000Z",
        "engagementCount": 1890
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-27T23:00:00.000Z",
        "engagementCount": 1223
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-27T23:00:00.000Z",
        "engagementCount": 1482
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-27T23:00:00.000Z",
        "engagementCount": 1832
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-27T23:00:00.000Z",
        "engagementCount": 1905
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-27T23:00:00.000Z",
        "engagementCount": 1762
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-28T23:00:00.000Z",
        "engagementCount": 1028
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-28T23:00:00.000Z",
        "engagementCount": 888
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-28T23:00:00.000Z",
        "engagementCount": 2213
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-28T23:00:00.000Z",
        "engagementCount": 1704
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-28T23:00:00.000Z",
        "engagementCount": 2999
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-29T23:00:00.000Z",
        "engagementCount": 901
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-29T23:00:00.000Z",
        "engagementCount": 1002
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-29T23:00:00.000Z",
        "engagementCount": 1217
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-29T23:00:00.000Z",
        "engagementCount": 1953
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-29T23:00:00.000Z",
        "engagementCount": 1889
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 2095
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 1159
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 1265
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 3016
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 1794
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 2329
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 1785
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 2186
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 2877
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-06-30T23:00:00.000Z",
        "engagementCount": 3155
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-01T23:00:00.000Z",
        "engagementCount": 2269
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-01T23:00:00.000Z",
        "engagementCount": 2332
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-01T23:00:00.000Z",
        "engagementCount": 2126
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-01T23:00:00.000Z",
        "engagementCount": 1500
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-01T23:00:00.000Z",
        "engagementCount": 1656
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-02T23:00:00.000Z",
        "engagementCount": 1819
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-02T23:00:00.000Z",
        "engagementCount": 1932
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-02T23:00:00.000Z",
        "engagementCount": 1351
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-02T23:00:00.000Z",
        "engagementCount": 2977
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-02T23:00:00.000Z",
        "engagementCount": 1399
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-03T23:00:00.000Z",
        "engagementCount": 1104
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-03T23:00:00.000Z",
        "engagementCount": 1601
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-03T23:00:00.000Z",
        "engagementCount": 2297
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-03T23:00:00.000Z",
        "engagementCount": 1283
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-03T23:00:00.000Z",
        "engagementCount": 3720
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-04T23:00:00.000Z",
        "engagementCount": 1748
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-04T23:00:00.000Z",
        "engagementCount": 967
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-04T23:00:00.000Z",
        "engagementCount": 3032
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-04T23:00:00.000Z",
        "engagementCount": 1289
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-04T23:00:00.000Z",
        "engagementCount": 2659
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-05T23:00:00.000Z",
        "engagementCount": 2035
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-05T23:00:00.000Z",
        "engagementCount": 1389
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-05T23:00:00.000Z",
        "engagementCount": 2002
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-05T23:00:00.000Z",
        "engagementCount": 2608
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-05T23:00:00.000Z",
        "engagementCount": 2169
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-06T23:00:00.000Z",
        "engagementCount": 929
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-06T23:00:00.000Z",
        "engagementCount": 2548
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-06T23:00:00.000Z",
        "engagementCount": 1676
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-06T23:00:00.000Z",
        "engagementCount": 1860
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-06T23:00:00.000Z",
        "engagementCount": 1402
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-07T23:00:00.000Z",
        "engagementCount": 1569
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-07T23:00:00.000Z",
        "engagementCount": 962
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-07T23:00:00.000Z",
        "engagementCount": 2169
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-07T23:00:00.000Z",
        "engagementCount": 2298
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-07T23:00:00.000Z",
        "engagementCount": 3732
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-08T23:00:00.000Z",
        "engagementCount": 1074
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-08T23:00:00.000Z",
        "engagementCount": 2553
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-08T23:00:00.000Z",
        "engagementCount": 2446
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-08T23:00:00.000Z",
        "engagementCount": 1526
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-08T23:00:00.000Z",
        "engagementCount": 3714
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-09T23:00:00.000Z",
        "engagementCount": 1112
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-09T23:00:00.000Z",
        "engagementCount": 1357
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-09T23:00:00.000Z",
        "engagementCount": 2562
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-09T23:00:00.000Z",
        "engagementCount": 1315
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-09T23:00:00.000Z",
        "engagementCount": 1366
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-10T23:00:00.000Z",
        "engagementCount": 2479
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-10T23:00:00.000Z",
        "engagementCount": 1688
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-10T23:00:00.000Z",
        "engagementCount": 2652
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-10T23:00:00.000Z",
        "engagementCount": 2352
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-10T23:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-11T23:00:00.000Z",
        "engagementCount": 2376
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-11T23:00:00.000Z",
        "engagementCount": 958
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-11T23:00:00.000Z",
        "engagementCount": 1146
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-11T23:00:00.000Z",
        "engagementCount": 1549
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-11T23:00:00.000Z",
        "engagementCount": 1902
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-12T23:00:00.000Z",
        "engagementCount": 928
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-12T23:00:00.000Z",
        "engagementCount": 993
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-12T23:00:00.000Z",
        "engagementCount": 2160
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-12T23:00:00.000Z",
        "engagementCount": 2424
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-12T23:00:00.000Z",
        "engagementCount": 1831
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-13T23:00:00.000Z",
        "engagementCount": 2217
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-13T23:00:00.000Z",
        "engagementCount": 1727
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-13T23:00:00.000Z",
        "engagementCount": 2677
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-13T23:00:00.000Z",
        "engagementCount": 2014
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-13T23:00:00.000Z",
        "engagementCount": 3412
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-14T23:00:00.000Z",
        "engagementCount": 1827
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-14T23:00:00.000Z",
        "engagementCount": 1475
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-14T23:00:00.000Z",
        "engagementCount": 2878
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-14T23:00:00.000Z",
        "engagementCount": 1948
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-14T23:00:00.000Z",
        "engagementCount": 3450
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-15T23:00:00.000Z",
        "engagementCount": 1248
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-15T23:00:00.000Z",
        "engagementCount": 2703
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-15T23:00:00.000Z",
        "engagementCount": 2990
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-15T23:00:00.000Z",
        "engagementCount": 1798
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-15T23:00:00.000Z",
        "engagementCount": 1612
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-16T23:00:00.000Z",
        "engagementCount": 2338
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-16T23:00:00.000Z",
        "engagementCount": 1896
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-16T23:00:00.000Z",
        "engagementCount": 2381
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-16T23:00:00.000Z",
        "engagementCount": 1332
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-16T23:00:00.000Z",
        "engagementCount": 2834
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-17T23:00:00.000Z",
        "engagementCount": 1099
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-17T23:00:00.000Z",
        "engagementCount": 2297
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-17T23:00:00.000Z",
        "engagementCount": 2568
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-17T23:00:00.000Z",
        "engagementCount": 3401
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-17T23:00:00.000Z",
        "engagementCount": 1267
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-18T23:00:00.000Z",
        "engagementCount": 2231
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-18T23:00:00.000Z",
        "engagementCount": 1136
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-18T23:00:00.000Z",
        "engagementCount": 1921
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-18T23:00:00.000Z",
        "engagementCount": 2406
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-18T23:00:00.000Z",
        "engagementCount": 1405
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-19T23:00:00.000Z",
        "engagementCount": 2207
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-19T23:00:00.000Z",
        "engagementCount": 2798
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-19T23:00:00.000Z",
        "engagementCount": 3113
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-19T23:00:00.000Z",
        "engagementCount": 3293
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-19T23:00:00.000Z",
        "engagementCount": 2135
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-20T23:00:00.000Z",
        "engagementCount": 964
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-20T23:00:00.000Z",
        "engagementCount": 1271
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-20T23:00:00.000Z",
        "engagementCount": 1911
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-20T23:00:00.000Z",
        "engagementCount": 2290
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-20T23:00:00.000Z",
        "engagementCount": 3006
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-21T23:00:00.000Z",
        "engagementCount": 2408
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-21T23:00:00.000Z",
        "engagementCount": 2737
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-21T23:00:00.000Z",
        "engagementCount": 2241
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-21T23:00:00.000Z",
        "engagementCount": 1342
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-21T23:00:00.000Z",
        "engagementCount": 2893
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-22T23:00:00.000Z",
        "engagementCount": 1131
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-22T23:00:00.000Z",
        "engagementCount": 2266
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-22T23:00:00.000Z",
        "engagementCount": 1142
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-22T23:00:00.000Z",
        "engagementCount": 2909
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-22T23:00:00.000Z",
        "engagementCount": 1377
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-23T23:00:00.000Z",
        "engagementCount": 1572
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-23T23:00:00.000Z",
        "engagementCount": 1936
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-23T23:00:00.000Z",
        "engagementCount": 2606
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-23T23:00:00.000Z",
        "engagementCount": 1279
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-23T23:00:00.000Z",
        "engagementCount": 2330
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-24T23:00:00.000Z",
        "engagementCount": 2413
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-24T23:00:00.000Z",
        "engagementCount": 1903
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-24T23:00:00.000Z",
        "engagementCount": 2779
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-24T23:00:00.000Z",
        "engagementCount": 2435
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-24T23:00:00.000Z",
        "engagementCount": 1994
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-25T23:00:00.000Z",
        "engagementCount": 1842
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-25T23:00:00.000Z",
        "engagementCount": 1120
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-25T23:00:00.000Z",
        "engagementCount": 2542
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-25T23:00:00.000Z",
        "engagementCount": 1908
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-25T23:00:00.000Z",
        "engagementCount": 1698
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-26T23:00:00.000Z",
        "engagementCount": 1991
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-26T23:00:00.000Z",
        "engagementCount": 2432
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-26T23:00:00.000Z",
        "engagementCount": 2584
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-26T23:00:00.000Z",
        "engagementCount": 1734
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-26T23:00:00.000Z",
        "engagementCount": 1781
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-27T23:00:00.000Z",
        "engagementCount": 1317
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-27T23:00:00.000Z",
        "engagementCount": 2274
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-27T23:00:00.000Z",
        "engagementCount": 1971
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-27T23:00:00.000Z",
        "engagementCount": 2798
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-27T23:00:00.000Z",
        "engagementCount": 1667
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-28T23:00:00.000Z",
        "engagementCount": 1599
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-28T23:00:00.000Z",
        "engagementCount": 2369
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-28T23:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-28T23:00:00.000Z",
        "engagementCount": 1603
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-28T23:00:00.000Z",
        "engagementCount": 1437
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-29T23:00:00.000Z",
        "engagementCount": 996
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-29T23:00:00.000Z",
        "engagementCount": 2761
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-29T23:00:00.000Z",
        "engagementCount": 2637
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-29T23:00:00.000Z",
        "engagementCount": 2864
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-29T23:00:00.000Z",
        "engagementCount": 1469
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-07-31T23:00:00.000Z",
        "engagementCount": 1432
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-07-31T23:00:00.000Z",
        "engagementCount": 2009
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-07-31T23:00:00.000Z",
        "engagementCount": 2581
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-07-31T23:00:00.000Z",
        "engagementCount": 1868
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-07-31T23:00:00.000Z",
        "engagementCount": 3099
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-01T23:00:00.000Z",
        "engagementCount": 2278
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-01T23:00:00.000Z",
        "engagementCount": 1408
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-01T23:00:00.000Z",
        "engagementCount": 2818
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-01T23:00:00.000Z",
        "engagementCount": 2243
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-01T23:00:00.000Z",
        "engagementCount": 1826
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-02T23:00:00.000Z",
        "engagementCount": 1610
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-02T23:00:00.000Z",
        "engagementCount": 2096
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-02T23:00:00.000Z",
        "engagementCount": 1654
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-02T23:00:00.000Z",
        "engagementCount": 1593
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-02T23:00:00.000Z",
        "engagementCount": 1394
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-03T23:00:00.000Z",
        "engagementCount": 1915
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-03T23:00:00.000Z",
        "engagementCount": 2336
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-03T23:00:00.000Z",
        "engagementCount": 2496
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-03T23:00:00.000Z",
        "engagementCount": 2706
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-03T23:00:00.000Z",
        "engagementCount": 2919
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-04T23:00:00.000Z",
        "engagementCount": 1616
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-04T23:00:00.000Z",
        "engagementCount": 868
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-04T23:00:00.000Z",
        "engagementCount": 1467
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-04T23:00:00.000Z",
        "engagementCount": 2321
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-04T23:00:00.000Z",
        "engagementCount": 2680
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-05T23:00:00.000Z",
        "engagementCount": 1919
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-05T23:00:00.000Z",
        "engagementCount": 2561
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-05T23:00:00.000Z",
        "engagementCount": 1220
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-05T23:00:00.000Z",
        "engagementCount": 2874
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-05T23:00:00.000Z",
        "engagementCount": 1190
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-06T23:00:00.000Z",
        "engagementCount": 2155
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-06T23:00:00.000Z",
        "engagementCount": 2125
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-06T23:00:00.000Z",
        "engagementCount": 1206
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-06T23:00:00.000Z",
        "engagementCount": 2929
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-06T23:00:00.000Z",
        "engagementCount": 2012
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-07T23:00:00.000Z",
        "engagementCount": 1677
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-07T23:00:00.000Z",
        "engagementCount": 2200
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-07T23:00:00.000Z",
        "engagementCount": 1600
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-07T23:00:00.000Z",
        "engagementCount": 1901
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-07T23:00:00.000Z",
        "engagementCount": 1170
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-08T23:00:00.000Z",
        "engagementCount": 2162
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-08T23:00:00.000Z",
        "engagementCount": 895
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-08T23:00:00.000Z",
        "engagementCount": 1458
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-08T23:00:00.000Z",
        "engagementCount": 2425
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-08T23:00:00.000Z",
        "engagementCount": 2037
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-09T23:00:00.000Z",
        "engagementCount": 1711
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-09T23:00:00.000Z",
        "engagementCount": 1993
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-09T23:00:00.000Z",
        "engagementCount": 2552
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-09T23:00:00.000Z",
        "engagementCount": 1414
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-09T23:00:00.000Z",
        "engagementCount": 1858
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-10T23:00:00.000Z",
        "engagementCount": 1280
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-10T23:00:00.000Z",
        "engagementCount": 1616
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-10T23:00:00.000Z",
        "engagementCount": 1068
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-10T23:00:00.000Z",
        "engagementCount": 2266
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-10T23:00:00.000Z",
        "engagementCount": 1809
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-11T23:00:00.000Z",
        "engagementCount": 1702
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-11T23:00:00.000Z",
        "engagementCount": 1983
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-11T23:00:00.000Z",
        "engagementCount": 2600
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-11T23:00:00.000Z",
        "engagementCount": 1690
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-11T23:00:00.000Z",
        "engagementCount": 1572
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-12T23:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-12T23:00:00.000Z",
        "engagementCount": 1948
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-12T23:00:00.000Z",
        "engagementCount": 1459
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-12T23:00:00.000Z",
        "engagementCount": 1547
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-12T23:00:00.000Z",
        "engagementCount": 1417
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-13T23:00:00.000Z",
        "engagementCount": 987
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-13T23:00:00.000Z",
        "engagementCount": 1594
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-13T23:00:00.000Z",
        "engagementCount": 1614
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-13T23:00:00.000Z",
        "engagementCount": 2524
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-13T23:00:00.000Z",
        "engagementCount": 2522
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-14T23:00:00.000Z",
        "engagementCount": 1433
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-14T23:00:00.000Z",
        "engagementCount": 2411
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-14T23:00:00.000Z",
        "engagementCount": 2836
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-14T23:00:00.000Z",
        "engagementCount": 2881
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-14T23:00:00.000Z",
        "engagementCount": 1640
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-15T23:00:00.000Z",
        "engagementCount": 1312
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-15T23:00:00.000Z",
        "engagementCount": 1556
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-15T23:00:00.000Z",
        "engagementCount": 1542
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-15T23:00:00.000Z",
        "engagementCount": 1385
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-15T23:00:00.000Z",
        "engagementCount": 2034
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-16T23:00:00.000Z",
        "engagementCount": 1376
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-16T23:00:00.000Z",
        "engagementCount": 2583
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-16T23:00:00.000Z",
        "engagementCount": 2169
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-16T23:00:00.000Z",
        "engagementCount": 2728
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-16T23:00:00.000Z",
        "engagementCount": 2435
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-17T23:00:00.000Z",
        "engagementCount": 1652
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-17T23:00:00.000Z",
        "engagementCount": 2552
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-17T23:00:00.000Z",
        "engagementCount": 2044
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-17T23:00:00.000Z",
        "engagementCount": 2937
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-17T23:00:00.000Z",
        "engagementCount": 1714
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-18T23:00:00.000Z",
        "engagementCount": 1923
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-18T23:00:00.000Z",
        "engagementCount": 1469
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-18T23:00:00.000Z",
        "engagementCount": 2650
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-18T23:00:00.000Z",
        "engagementCount": 2371
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-18T23:00:00.000Z",
        "engagementCount": 3262
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-19T23:00:00.000Z",
        "engagementCount": 2074
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-19T23:00:00.000Z",
        "engagementCount": 1830
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-19T23:00:00.000Z",
        "engagementCount": 2527
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-19T23:00:00.000Z",
        "engagementCount": 2673
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-19T23:00:00.000Z",
        "engagementCount": 2526
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-20T23:00:00.000Z",
        "engagementCount": 1195
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-20T23:00:00.000Z",
        "engagementCount": 1178
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-20T23:00:00.000Z",
        "engagementCount": 1405
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-20T23:00:00.000Z",
        "engagementCount": 1509
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-20T23:00:00.000Z",
        "engagementCount": 1613
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-21T23:00:00.000Z",
        "engagementCount": 2203
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-21T23:00:00.000Z",
        "engagementCount": 1484
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-21T23:00:00.000Z",
        "engagementCount": 2681
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-21T23:00:00.000Z",
        "engagementCount": 1713
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-21T23:00:00.000Z",
        "engagementCount": 1158
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-22T23:00:00.000Z",
        "engagementCount": 1260
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-22T23:00:00.000Z",
        "engagementCount": 1235
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-22T23:00:00.000Z",
        "engagementCount": 1303
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-22T23:00:00.000Z",
        "engagementCount": 1364
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-22T23:00:00.000Z",
        "engagementCount": 1228
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-23T23:00:00.000Z",
        "engagementCount": 2237
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-23T23:00:00.000Z",
        "engagementCount": 2072
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-23T23:00:00.000Z",
        "engagementCount": 1616
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-23T23:00:00.000Z",
        "engagementCount": 1426
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-23T23:00:00.000Z",
        "engagementCount": 1270
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-24T23:00:00.000Z",
        "engagementCount": 928
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-24T23:00:00.000Z",
        "engagementCount": 1081
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-24T23:00:00.000Z",
        "engagementCount": 1945
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-24T23:00:00.000Z",
        "engagementCount": 1598
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-24T23:00:00.000Z",
        "engagementCount": 1545
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-25T23:00:00.000Z",
        "engagementCount": 931
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-25T23:00:00.000Z",
        "engagementCount": 2294
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-25T23:00:00.000Z",
        "engagementCount": 2804
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-25T23:00:00.000Z",
        "engagementCount": 1259
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-25T23:00:00.000Z",
        "engagementCount": 2520
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-26T23:00:00.000Z",
        "engagementCount": 1951
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-26T23:00:00.000Z",
        "engagementCount": 1474
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-26T23:00:00.000Z",
        "engagementCount": 1309
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-26T23:00:00.000Z",
        "engagementCount": 2189
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-26T23:00:00.000Z",
        "engagementCount": 1944
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-27T23:00:00.000Z",
        "engagementCount": 1823
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-27T23:00:00.000Z",
        "engagementCount": 2134
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-27T23:00:00.000Z",
        "engagementCount": 2684
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-27T23:00:00.000Z",
        "engagementCount": 2922
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-27T23:00:00.000Z",
        "engagementCount": 1984
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-28T23:00:00.000Z",
        "engagementCount": 1634
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-28T23:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-28T23:00:00.000Z",
        "engagementCount": 2107
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-28T23:00:00.000Z",
        "engagementCount": 2492
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-28T23:00:00.000Z",
        "engagementCount": 3191
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-29T23:00:00.000Z",
        "engagementCount": 1216
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-29T23:00:00.000Z",
        "engagementCount": 1039
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-29T23:00:00.000Z",
        "engagementCount": 1765
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-29T23:00:00.000Z",
        "engagementCount": 1605
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-29T23:00:00.000Z",
        "engagementCount": 2001
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-30T23:00:00.000Z",
        "engagementCount": 2301
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-30T23:00:00.000Z",
        "engagementCount": 1569
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-30T23:00:00.000Z",
        "engagementCount": 2876
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-30T23:00:00.000Z",
        "engagementCount": 1781
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-30T23:00:00.000Z",
        "engagementCount": 2313
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-08-31T23:00:00.000Z",
        "engagementCount": 766
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-08-31T23:00:00.000Z",
        "engagementCount": 1362
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-08-31T23:00:00.000Z",
        "engagementCount": 1905
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-08-31T23:00:00.000Z",
        "engagementCount": 1870
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-08-31T23:00:00.000Z",
        "engagementCount": 2181
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-01T23:00:00.000Z",
        "engagementCount": 1192
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-01T23:00:00.000Z",
        "engagementCount": 1868
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-01T23:00:00.000Z",
        "engagementCount": 1881
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-01T23:00:00.000Z",
        "engagementCount": 2098
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-01T23:00:00.000Z",
        "engagementCount": 2156
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-02T23:00:00.000Z",
        "engagementCount": 716
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-02T23:00:00.000Z",
        "engagementCount": 1334
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-02T23:00:00.000Z",
        "engagementCount": 2401
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-02T23:00:00.000Z",
        "engagementCount": 1971
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-02T23:00:00.000Z",
        "engagementCount": 1598
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-03T23:00:00.000Z",
        "engagementCount": 1886
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-03T23:00:00.000Z",
        "engagementCount": 1030
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-03T23:00:00.000Z",
        "engagementCount": 1616
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-03T23:00:00.000Z",
        "engagementCount": 1109
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-03T23:00:00.000Z",
        "engagementCount": 1810
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-04T23:00:00.000Z",
        "engagementCount": 1262
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-04T23:00:00.000Z",
        "engagementCount": 1842
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-04T23:00:00.000Z",
        "engagementCount": 1147
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-04T23:00:00.000Z",
        "engagementCount": 2120
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-04T23:00:00.000Z",
        "engagementCount": 1960
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-05T23:00:00.000Z",
        "engagementCount": 1496
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-05T23:00:00.000Z",
        "engagementCount": 2318
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-05T23:00:00.000Z",
        "engagementCount": 905
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-05T23:00:00.000Z",
        "engagementCount": 1821
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-05T23:00:00.000Z",
        "engagementCount": 2836
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-06T23:00:00.000Z",
        "engagementCount": 897
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-06T23:00:00.000Z",
        "engagementCount": 1787
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-06T23:00:00.000Z",
        "engagementCount": 2132
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-06T23:00:00.000Z",
        "engagementCount": 1190
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-06T23:00:00.000Z",
        "engagementCount": 3083
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-07T23:00:00.000Z",
        "engagementCount": 866
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-07T23:00:00.000Z",
        "engagementCount": 1596
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-07T23:00:00.000Z",
        "engagementCount": 1322
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-07T23:00:00.000Z",
        "engagementCount": 1654
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-07T23:00:00.000Z",
        "engagementCount": 2834
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-08T23:00:00.000Z",
        "engagementCount": 1718
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-08T23:00:00.000Z",
        "engagementCount": 1788
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-08T23:00:00.000Z",
        "engagementCount": 2397
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-08T23:00:00.000Z",
        "engagementCount": 1393
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-08T23:00:00.000Z",
        "engagementCount": 1950
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-09T23:00:00.000Z",
        "engagementCount": 808
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-09T23:00:00.000Z",
        "engagementCount": 1803
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-09T23:00:00.000Z",
        "engagementCount": 975
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-09T23:00:00.000Z",
        "engagementCount": 2477
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-09T23:00:00.000Z",
        "engagementCount": 1677
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-10T23:00:00.000Z",
        "engagementCount": 1686
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-10T23:00:00.000Z",
        "engagementCount": 1706
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-10T23:00:00.000Z",
        "engagementCount": 1189
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-10T23:00:00.000Z",
        "engagementCount": 1503
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-10T23:00:00.000Z",
        "engagementCount": 1146
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-11T23:00:00.000Z",
        "engagementCount": 2018
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-11T23:00:00.000Z",
        "engagementCount": 2170
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-11T23:00:00.000Z",
        "engagementCount": 2424
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-11T23:00:00.000Z",
        "engagementCount": 1164
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-11T23:00:00.000Z",
        "engagementCount": 1488
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-12T23:00:00.000Z",
        "engagementCount": 743
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-12T23:00:00.000Z",
        "engagementCount": 1460
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-12T23:00:00.000Z",
        "engagementCount": 946
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-12T23:00:00.000Z",
        "engagementCount": 2820
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-12T23:00:00.000Z",
        "engagementCount": 2692
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-13T23:00:00.000Z",
        "engagementCount": 1422
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-13T23:00:00.000Z",
        "engagementCount": 1040
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-13T23:00:00.000Z",
        "engagementCount": 2339
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-13T23:00:00.000Z",
        "engagementCount": 2258
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-13T23:00:00.000Z",
        "engagementCount": 2407
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-14T23:00:00.000Z",
        "engagementCount": 931
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-14T23:00:00.000Z",
        "engagementCount": 2230
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-14T23:00:00.000Z",
        "engagementCount": 1639
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-14T23:00:00.000Z",
        "engagementCount": 2422
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-14T23:00:00.000Z",
        "engagementCount": 1641
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-15T23:00:00.000Z",
        "engagementCount": 2048
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-15T23:00:00.000Z",
        "engagementCount": 1226
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-15T23:00:00.000Z",
        "engagementCount": 1770
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-15T23:00:00.000Z",
        "engagementCount": 1912
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-15T23:00:00.000Z",
        "engagementCount": 2072
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-16T23:00:00.000Z",
        "engagementCount": 1120
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-16T23:00:00.000Z",
        "engagementCount": 2016
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-16T23:00:00.000Z",
        "engagementCount": 2531
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-16T23:00:00.000Z",
        "engagementCount": 1974
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-16T23:00:00.000Z",
        "engagementCount": 2032
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-17T23:00:00.000Z",
        "engagementCount": 1075
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-17T23:00:00.000Z",
        "engagementCount": 1291
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-17T23:00:00.000Z",
        "engagementCount": 2467
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-17T23:00:00.000Z",
        "engagementCount": 2656
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-17T23:00:00.000Z",
        "engagementCount": 2842
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-18T23:00:00.000Z",
        "engagementCount": 900
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-18T23:00:00.000Z",
        "engagementCount": 1586
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-18T23:00:00.000Z",
        "engagementCount": 2409
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-18T23:00:00.000Z",
        "engagementCount": 1811
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-18T23:00:00.000Z",
        "engagementCount": 3118
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-19T23:00:00.000Z",
        "engagementCount": 956
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-19T23:00:00.000Z",
        "engagementCount": 2331
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-19T23:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-19T23:00:00.000Z",
        "engagementCount": 1154
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-19T23:00:00.000Z",
        "engagementCount": 2763
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-20T23:00:00.000Z",
        "engagementCount": 1700
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-20T23:00:00.000Z",
        "engagementCount": 871
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-20T23:00:00.000Z",
        "engagementCount": 1859
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-20T23:00:00.000Z",
        "engagementCount": 1712
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-20T23:00:00.000Z",
        "engagementCount": 2516
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-21T23:00:00.000Z",
        "engagementCount": 1942
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-21T23:00:00.000Z",
        "engagementCount": 1707
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-21T23:00:00.000Z",
        "engagementCount": 1691
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-21T23:00:00.000Z",
        "engagementCount": 2209
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-21T23:00:00.000Z",
        "engagementCount": 2638
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-22T23:00:00.000Z",
        "engagementCount": 1506
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-22T23:00:00.000Z",
        "engagementCount": 2071
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-22T23:00:00.000Z",
        "engagementCount": 1087
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-22T23:00:00.000Z",
        "engagementCount": 2820
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-22T23:00:00.000Z",
        "engagementCount": 2261
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-23T23:00:00.000Z",
        "engagementCount": 1524
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-23T23:00:00.000Z",
        "engagementCount": 1669
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-23T23:00:00.000Z",
        "engagementCount": 2000
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-23T23:00:00.000Z",
        "engagementCount": 2586
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-23T23:00:00.000Z",
        "engagementCount": 1290
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-24T23:00:00.000Z",
        "engagementCount": 1285
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-24T23:00:00.000Z",
        "engagementCount": 1950
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-24T23:00:00.000Z",
        "engagementCount": 2302
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-24T23:00:00.000Z",
        "engagementCount": 1220
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-24T23:00:00.000Z",
        "engagementCount": 1446
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-25T23:00:00.000Z",
        "engagementCount": 981
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-25T23:00:00.000Z",
        "engagementCount": 2306
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-25T23:00:00.000Z",
        "engagementCount": 2312
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-25T23:00:00.000Z",
        "engagementCount": 1027
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-25T23:00:00.000Z",
        "engagementCount": 2778
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-26T23:00:00.000Z",
        "engagementCount": 1906
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-26T23:00:00.000Z",
        "engagementCount": 851
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-26T23:00:00.000Z",
        "engagementCount": 1732
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-26T23:00:00.000Z",
        "engagementCount": 2121
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-26T23:00:00.000Z",
        "engagementCount": 1103
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-27T23:00:00.000Z",
        "engagementCount": 1844
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-27T23:00:00.000Z",
        "engagementCount": 1579
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-27T23:00:00.000Z",
        "engagementCount": 1950
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-27T23:00:00.000Z",
        "engagementCount": 2114
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-27T23:00:00.000Z",
        "engagementCount": 1280
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-28T23:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-28T23:00:00.000Z",
        "engagementCount": 1202
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-28T23:00:00.000Z",
        "engagementCount": 1844
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-28T23:00:00.000Z",
        "engagementCount": 1067
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-28T23:00:00.000Z",
        "engagementCount": 1206
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-29T23:00:00.000Z",
        "engagementCount": 972
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-29T23:00:00.000Z",
        "engagementCount": 2224
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-29T23:00:00.000Z",
        "engagementCount": 1485
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-29T23:00:00.000Z",
        "engagementCount": 2630
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-29T23:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 1775
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 827
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 1092
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 2201
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 2467
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 1500
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 863
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 830
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 889
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-09-30T23:00:00.000Z",
        "engagementCount": 1160
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-01T23:00:00.000Z",
        "engagementCount": 1220
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-01T23:00:00.000Z",
        "engagementCount": 1670
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-01T23:00:00.000Z",
        "engagementCount": 2360
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-01T23:00:00.000Z",
        "engagementCount": 2545
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-01T23:00:00.000Z",
        "engagementCount": 1423
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-02T23:00:00.000Z",
        "engagementCount": 1883
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-02T23:00:00.000Z",
        "engagementCount": 1390
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-02T23:00:00.000Z",
        "engagementCount": 1855
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-02T23:00:00.000Z",
        "engagementCount": 1451
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-02T23:00:00.000Z",
        "engagementCount": 1868
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-03T23:00:00.000Z",
        "engagementCount": 789
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-03T23:00:00.000Z",
        "engagementCount": 1964
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-03T23:00:00.000Z",
        "engagementCount": 1847
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-03T23:00:00.000Z",
        "engagementCount": 944
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-03T23:00:00.000Z",
        "engagementCount": 1836
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-04T23:00:00.000Z",
        "engagementCount": 664
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-04T23:00:00.000Z",
        "engagementCount": 1797
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-04T23:00:00.000Z",
        "engagementCount": 2261
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-04T23:00:00.000Z",
        "engagementCount": 1923
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-04T23:00:00.000Z",
        "engagementCount": 2756
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-05T23:00:00.000Z",
        "engagementCount": 1387
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-05T23:00:00.000Z",
        "engagementCount": 1544
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-05T23:00:00.000Z",
        "engagementCount": 1026
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-05T23:00:00.000Z",
        "engagementCount": 2248
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-05T23:00:00.000Z",
        "engagementCount": 1002
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-06T23:00:00.000Z",
        "engagementCount": 1452
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-06T23:00:00.000Z",
        "engagementCount": 2006
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-06T23:00:00.000Z",
        "engagementCount": 1906
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-06T23:00:00.000Z",
        "engagementCount": 2042
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-06T23:00:00.000Z",
        "engagementCount": 1594
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-07T23:00:00.000Z",
        "engagementCount": 1102
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-07T23:00:00.000Z",
        "engagementCount": 2073
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-07T23:00:00.000Z",
        "engagementCount": 1122
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-07T23:00:00.000Z",
        "engagementCount": 1128
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-07T23:00:00.000Z",
        "engagementCount": 2370
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-08T23:00:00.000Z",
        "engagementCount": 1170
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-08T23:00:00.000Z",
        "engagementCount": 1253
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-08T23:00:00.000Z",
        "engagementCount": 1261
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-08T23:00:00.000Z",
        "engagementCount": 2441
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-08T23:00:00.000Z",
        "engagementCount": 1013
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-09T23:00:00.000Z",
        "engagementCount": 766
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-09T23:00:00.000Z",
        "engagementCount": 2046
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-09T23:00:00.000Z",
        "engagementCount": 1456
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-09T23:00:00.000Z",
        "engagementCount": 2086
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-09T23:00:00.000Z",
        "engagementCount": 1795
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-10T23:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-10T23:00:00.000Z",
        "engagementCount": 830
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-10T23:00:00.000Z",
        "engagementCount": 2196
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-10T23:00:00.000Z",
        "engagementCount": 2629
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-10T23:00:00.000Z",
        "engagementCount": 1493
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-11T23:00:00.000Z",
        "engagementCount": 1250
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-11T23:00:00.000Z",
        "engagementCount": 1876
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-11T23:00:00.000Z",
        "engagementCount": 2292
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-11T23:00:00.000Z",
        "engagementCount": 950
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-11T23:00:00.000Z",
        "engagementCount": 1730
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-12T23:00:00.000Z",
        "engagementCount": 1138
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-12T23:00:00.000Z",
        "engagementCount": 1972
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-12T23:00:00.000Z",
        "engagementCount": 1849
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-12T23:00:00.000Z",
        "engagementCount": 1905
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-12T23:00:00.000Z",
        "engagementCount": 2483
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-13T23:00:00.000Z",
        "engagementCount": 1589
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-13T23:00:00.000Z",
        "engagementCount": 817
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-13T23:00:00.000Z",
        "engagementCount": 863
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-13T23:00:00.000Z",
        "engagementCount": 1433
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-13T23:00:00.000Z",
        "engagementCount": 1708
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-14T23:00:00.000Z",
        "engagementCount": 989
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-14T23:00:00.000Z",
        "engagementCount": 1665
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-14T23:00:00.000Z",
        "engagementCount": 2074
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-14T23:00:00.000Z",
        "engagementCount": 1877
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-14T23:00:00.000Z",
        "engagementCount": 1647
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-15T23:00:00.000Z",
        "engagementCount": 1493
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-15T23:00:00.000Z",
        "engagementCount": 1830
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-15T23:00:00.000Z",
        "engagementCount": 1600
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-15T23:00:00.000Z",
        "engagementCount": 1790
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-15T23:00:00.000Z",
        "engagementCount": 2268
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-16T23:00:00.000Z",
        "engagementCount": 1060
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-16T23:00:00.000Z",
        "engagementCount": 2065
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-16T23:00:00.000Z",
        "engagementCount": 1706
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-16T23:00:00.000Z",
        "engagementCount": 1098
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-16T23:00:00.000Z",
        "engagementCount": 1895
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-17T23:00:00.000Z",
        "engagementCount": 1861
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-17T23:00:00.000Z",
        "engagementCount": 2046
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-17T23:00:00.000Z",
        "engagementCount": 1923
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-17T23:00:00.000Z",
        "engagementCount": 2400
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-17T23:00:00.000Z",
        "engagementCount": 1750
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-18T23:00:00.000Z",
        "engagementCount": 1260
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-18T23:00:00.000Z",
        "engagementCount": 840
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-18T23:00:00.000Z",
        "engagementCount": 1585
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-18T23:00:00.000Z",
        "engagementCount": 2434
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-18T23:00:00.000Z",
        "engagementCount": 1628
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-19T23:00:00.000Z",
        "engagementCount": 1210
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-19T23:00:00.000Z",
        "engagementCount": 1300
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-19T23:00:00.000Z",
        "engagementCount": 2239
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-19T23:00:00.000Z",
        "engagementCount": 2135
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-19T23:00:00.000Z",
        "engagementCount": 2249
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-20T23:00:00.000Z",
        "engagementCount": 1597
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-20T23:00:00.000Z",
        "engagementCount": 1852
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-20T23:00:00.000Z",
        "engagementCount": 2264
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-20T23:00:00.000Z",
        "engagementCount": 2578
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-20T23:00:00.000Z",
        "engagementCount": 2277
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-21T23:00:00.000Z",
        "engagementCount": 822
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-21T23:00:00.000Z",
        "engagementCount": 1147
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-21T23:00:00.000Z",
        "engagementCount": 1813
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-21T23:00:00.000Z",
        "engagementCount": 2571
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-21T23:00:00.000Z",
        "engagementCount": 2559
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-22T23:00:00.000Z",
        "engagementCount": 957
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-22T23:00:00.000Z",
        "engagementCount": 1365
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-22T23:00:00.000Z",
        "engagementCount": 1769
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-22T23:00:00.000Z",
        "engagementCount": 1263
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-22T23:00:00.000Z",
        "engagementCount": 1375
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-23T23:00:00.000Z",
        "engagementCount": 1440
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-23T23:00:00.000Z",
        "engagementCount": 1778
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-23T23:00:00.000Z",
        "engagementCount": 2326
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-23T23:00:00.000Z",
        "engagementCount": 1830
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-23T23:00:00.000Z",
        "engagementCount": 1557
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-24T23:00:00.000Z",
        "engagementCount": 680
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-24T23:00:00.000Z",
        "engagementCount": 740
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-24T23:00:00.000Z",
        "engagementCount": 1085
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-24T23:00:00.000Z",
        "engagementCount": 2324
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-24T23:00:00.000Z",
        "engagementCount": 2515
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-26T00:00:00.000Z",
        "engagementCount": 1175
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-26T00:00:00.000Z",
        "engagementCount": 1338
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-26T00:00:00.000Z",
        "engagementCount": 2154
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-26T00:00:00.000Z",
        "engagementCount": 1985
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-26T00:00:00.000Z",
        "engagementCount": 2432
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-27T00:00:00.000Z",
        "engagementCount": 1771
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-27T00:00:00.000Z",
        "engagementCount": 875
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-27T00:00:00.000Z",
        "engagementCount": 2139
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-27T00:00:00.000Z",
        "engagementCount": 1614
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-27T00:00:00.000Z",
        "engagementCount": 1600
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-28T00:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-28T00:00:00.000Z",
        "engagementCount": 848
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-28T00:00:00.000Z",
        "engagementCount": 1149
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-28T00:00:00.000Z",
        "engagementCount": 933
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-28T00:00:00.000Z",
        "engagementCount": 2235
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-29T00:00:00.000Z",
        "engagementCount": 1568
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-29T00:00:00.000Z",
        "engagementCount": 1891
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-29T00:00:00.000Z",
        "engagementCount": 2347
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-29T00:00:00.000Z",
        "engagementCount": 2089
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-29T00:00:00.000Z",
        "engagementCount": 2179
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-10-30T00:00:00.000Z",
        "engagementCount": 1310
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-10-30T00:00:00.000Z",
        "engagementCount": 955
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-10-30T00:00:00.000Z",
        "engagementCount": 1271
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-10-30T00:00:00.000Z",
        "engagementCount": 2198
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-10-30T00:00:00.000Z",
        "engagementCount": 2575
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-01T00:00:00.000Z",
        "engagementCount": 1066
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-01T00:00:00.000Z",
        "engagementCount": 1696
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-01T00:00:00.000Z",
        "engagementCount": 886
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-01T00:00:00.000Z",
        "engagementCount": 972
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-01T00:00:00.000Z",
        "engagementCount": 2197
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-02T00:00:00.000Z",
        "engagementCount": 1324
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-02T00:00:00.000Z",
        "engagementCount": 1085
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-02T00:00:00.000Z",
        "engagementCount": 1743
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-02T00:00:00.000Z",
        "engagementCount": 1385
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-02T00:00:00.000Z",
        "engagementCount": 1054
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-03T00:00:00.000Z",
        "engagementCount": 1597
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-03T00:00:00.000Z",
        "engagementCount": 1786
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-03T00:00:00.000Z",
        "engagementCount": 1494
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-03T00:00:00.000Z",
        "engagementCount": 1231
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-03T00:00:00.000Z",
        "engagementCount": 2489
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-04T00:00:00.000Z",
        "engagementCount": 1719
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-04T00:00:00.000Z",
        "engagementCount": 1453
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-04T00:00:00.000Z",
        "engagementCount": 858
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-04T00:00:00.000Z",
        "engagementCount": 1621
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-04T00:00:00.000Z",
        "engagementCount": 1278
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-05T00:00:00.000Z",
        "engagementCount": 974
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-05T00:00:00.000Z",
        "engagementCount": 1712
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-05T00:00:00.000Z",
        "engagementCount": 1108
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-05T00:00:00.000Z",
        "engagementCount": 1128
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-05T00:00:00.000Z",
        "engagementCount": 2406
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-06T00:00:00.000Z",
        "engagementCount": 783
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-06T00:00:00.000Z",
        "engagementCount": 1050
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-06T00:00:00.000Z",
        "engagementCount": 1128
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-06T00:00:00.000Z",
        "engagementCount": 1501
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-06T00:00:00.000Z",
        "engagementCount": 1858
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-07T00:00:00.000Z",
        "engagementCount": 1384
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-07T00:00:00.000Z",
        "engagementCount": 662
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-07T00:00:00.000Z",
        "engagementCount": 1968
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-07T00:00:00.000Z",
        "engagementCount": 1648
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-07T00:00:00.000Z",
        "engagementCount": 979
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-08T00:00:00.000Z",
        "engagementCount": 1555
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-08T00:00:00.000Z",
        "engagementCount": 1914
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-08T00:00:00.000Z",
        "engagementCount": 2091
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-08T00:00:00.000Z",
        "engagementCount": 1939
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-08T00:00:00.000Z",
        "engagementCount": 2107
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-09T00:00:00.000Z",
        "engagementCount": 973
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-09T00:00:00.000Z",
        "engagementCount": 1053
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-09T00:00:00.000Z",
        "engagementCount": 1448
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-09T00:00:00.000Z",
        "engagementCount": 1451
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-09T00:00:00.000Z",
        "engagementCount": 1484
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-10T00:00:00.000Z",
        "engagementCount": 1327
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-10T00:00:00.000Z",
        "engagementCount": 848
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-10T00:00:00.000Z",
        "engagementCount": 869
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-10T00:00:00.000Z",
        "engagementCount": 2094
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-10T00:00:00.000Z",
        "engagementCount": 1494
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-11T00:00:00.000Z",
        "engagementCount": 1482
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-11T00:00:00.000Z",
        "engagementCount": 1848
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-11T00:00:00.000Z",
        "engagementCount": 996
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-11T00:00:00.000Z",
        "engagementCount": 1031
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-11T00:00:00.000Z",
        "engagementCount": 1532
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-12T00:00:00.000Z",
        "engagementCount": 1027
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-12T00:00:00.000Z",
        "engagementCount": 1199
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-12T00:00:00.000Z",
        "engagementCount": 1740
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-12T00:00:00.000Z",
        "engagementCount": 2250
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-12T00:00:00.000Z",
        "engagementCount": 2092
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-13T00:00:00.000Z",
        "engagementCount": 720
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-13T00:00:00.000Z",
        "engagementCount": 957
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-13T00:00:00.000Z",
        "engagementCount": 1767
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-13T00:00:00.000Z",
        "engagementCount": 1963
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-13T00:00:00.000Z",
        "engagementCount": 1926
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-14T00:00:00.000Z",
        "engagementCount": 1654
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-14T00:00:00.000Z",
        "engagementCount": 1090
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-14T00:00:00.000Z",
        "engagementCount": 1312
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-14T00:00:00.000Z",
        "engagementCount": 1555
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-14T00:00:00.000Z",
        "engagementCount": 1837
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-15T00:00:00.000Z",
        "engagementCount": 1528
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-15T00:00:00.000Z",
        "engagementCount": 1102
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-15T00:00:00.000Z",
        "engagementCount": 2033
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-15T00:00:00.000Z",
        "engagementCount": 1934
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-15T00:00:00.000Z",
        "engagementCount": 1631
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-16T00:00:00.000Z",
        "engagementCount": 695
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-16T00:00:00.000Z",
        "engagementCount": 1306
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-16T00:00:00.000Z",
        "engagementCount": 1904
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-16T00:00:00.000Z",
        "engagementCount": 825
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-16T00:00:00.000Z",
        "engagementCount": 1645
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-17T00:00:00.000Z",
        "engagementCount": 723
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-17T00:00:00.000Z",
        "engagementCount": 1358
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-17T00:00:00.000Z",
        "engagementCount": 1786
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-17T00:00:00.000Z",
        "engagementCount": 1009
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-17T00:00:00.000Z",
        "engagementCount": 1877
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-18T00:00:00.000Z",
        "engagementCount": 1180
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-18T00:00:00.000Z",
        "engagementCount": 1088
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-18T00:00:00.000Z",
        "engagementCount": 1010
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-18T00:00:00.000Z",
        "engagementCount": 1251
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-18T00:00:00.000Z",
        "engagementCount": 1222
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-19T00:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-19T00:00:00.000Z",
        "engagementCount": 808
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-19T00:00:00.000Z",
        "engagementCount": 1262
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-19T00:00:00.000Z",
        "engagementCount": 1073
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-19T00:00:00.000Z",
        "engagementCount": 1619
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-20T00:00:00.000Z",
        "engagementCount": 1290
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-20T00:00:00.000Z",
        "engagementCount": 1542
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-20T00:00:00.000Z",
        "engagementCount": 1565
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-20T00:00:00.000Z",
        "engagementCount": 944
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-20T00:00:00.000Z",
        "engagementCount": 2025
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-21T00:00:00.000Z",
        "engagementCount": 1434
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-21T00:00:00.000Z",
        "engagementCount": 1540
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-21T00:00:00.000Z",
        "engagementCount": 1731
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-21T00:00:00.000Z",
        "engagementCount": 1361
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-21T00:00:00.000Z",
        "engagementCount": 1288
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-22T00:00:00.000Z",
        "engagementCount": 741
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-22T00:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-22T00:00:00.000Z",
        "engagementCount": 927
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-22T00:00:00.000Z",
        "engagementCount": 2103
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-22T00:00:00.000Z",
        "engagementCount": 1893
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-23T00:00:00.000Z",
        "engagementCount": 1546
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-23T00:00:00.000Z",
        "engagementCount": 871
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-23T00:00:00.000Z",
        "engagementCount": 2019
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-23T00:00:00.000Z",
        "engagementCount": 1425
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-23T00:00:00.000Z",
        "engagementCount": 1007
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-24T00:00:00.000Z",
        "engagementCount": 1460
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-24T00:00:00.000Z",
        "engagementCount": 1341
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-24T00:00:00.000Z",
        "engagementCount": 992
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-24T00:00:00.000Z",
        "engagementCount": 2270
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-24T00:00:00.000Z",
        "engagementCount": 1727
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-25T00:00:00.000Z",
        "engagementCount": 903
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-25T00:00:00.000Z",
        "engagementCount": 766
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-25T00:00:00.000Z",
        "engagementCount": 2073
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-25T00:00:00.000Z",
        "engagementCount": 852
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-25T00:00:00.000Z",
        "engagementCount": 1614
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-26T00:00:00.000Z",
        "engagementCount": 702
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-26T00:00:00.000Z",
        "engagementCount": 968
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-26T00:00:00.000Z",
        "engagementCount": 2110
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-26T00:00:00.000Z",
        "engagementCount": 1882
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-26T00:00:00.000Z",
        "engagementCount": 1176
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-27T00:00:00.000Z",
        "engagementCount": 1122
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-27T00:00:00.000Z",
        "engagementCount": 1566
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-27T00:00:00.000Z",
        "engagementCount": 762
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-27T00:00:00.000Z",
        "engagementCount": 971
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-27T00:00:00.000Z",
        "engagementCount": 1374
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-28T00:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-28T00:00:00.000Z",
        "engagementCount": 975
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-28T00:00:00.000Z",
        "engagementCount": 1629
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-28T00:00:00.000Z",
        "engagementCount": 1846
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-28T00:00:00.000Z",
        "engagementCount": 2322
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-29T00:00:00.000Z",
        "engagementCount": 705
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-29T00:00:00.000Z",
        "engagementCount": 1838
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-29T00:00:00.000Z",
        "engagementCount": 1070
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-29T00:00:00.000Z",
        "engagementCount": 1783
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-29T00:00:00.000Z",
        "engagementCount": 2215
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-11-30T00:00:00.000Z",
        "engagementCount": 840
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-11-30T00:00:00.000Z",
        "engagementCount": 1115
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-11-30T00:00:00.000Z",
        "engagementCount": 1037
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-11-30T00:00:00.000Z",
        "engagementCount": 2205
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-11-30T00:00:00.000Z",
        "engagementCount": 2316
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 776
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 649
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 1172
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 1274
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 992
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 1116
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 1608
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 1988
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-01T00:00:00.000Z",
        "engagementCount": 1325
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-02T00:00:00.000Z",
        "engagementCount": 1098
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-02T00:00:00.000Z",
        "engagementCount": 1275
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-02T00:00:00.000Z",
        "engagementCount": 1043
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-02T00:00:00.000Z",
        "engagementCount": 1900
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-02T00:00:00.000Z",
        "engagementCount": 824
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-03T00:00:00.000Z",
        "engagementCount": 1527
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-03T00:00:00.000Z",
        "engagementCount": 1512
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-03T00:00:00.000Z",
        "engagementCount": 929
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-03T00:00:00.000Z",
        "engagementCount": 1851
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-03T00:00:00.000Z",
        "engagementCount": 990
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-04T00:00:00.000Z",
        "engagementCount": 1461
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-04T00:00:00.000Z",
        "engagementCount": 1157
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-04T00:00:00.000Z",
        "engagementCount": 1649
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-04T00:00:00.000Z",
        "engagementCount": 1032
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-04T00:00:00.000Z",
        "engagementCount": 2031
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-05T00:00:00.000Z",
        "engagementCount": 1054
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-05T00:00:00.000Z",
        "engagementCount": 638
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-05T00:00:00.000Z",
        "engagementCount": 840
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-05T00:00:00.000Z",
        "engagementCount": 706
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-05T00:00:00.000Z",
        "engagementCount": 1018
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-06T00:00:00.000Z",
        "engagementCount": 998
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-06T00:00:00.000Z",
        "engagementCount": 781
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-06T00:00:00.000Z",
        "engagementCount": 1119
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-06T00:00:00.000Z",
        "engagementCount": 1116
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-06T00:00:00.000Z",
        "engagementCount": 1512
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-07T00:00:00.000Z",
        "engagementCount": 1326
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-07T00:00:00.000Z",
        "engagementCount": 766
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-07T00:00:00.000Z",
        "engagementCount": 722
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-07T00:00:00.000Z",
        "engagementCount": 1076
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-07T00:00:00.000Z",
        "engagementCount": 1765
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-08T00:00:00.000Z",
        "engagementCount": 1420
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-08T00:00:00.000Z",
        "engagementCount": 1089
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-08T00:00:00.000Z",
        "engagementCount": 674
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-08T00:00:00.000Z",
        "engagementCount": 1317
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-08T00:00:00.000Z",
        "engagementCount": 986
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-09T00:00:00.000Z",
        "engagementCount": 1253
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-09T00:00:00.000Z",
        "engagementCount": 960
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-09T00:00:00.000Z",
        "engagementCount": 1247
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-09T00:00:00.000Z",
        "engagementCount": 1847
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-09T00:00:00.000Z",
        "engagementCount": 1756
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-10T00:00:00.000Z",
        "engagementCount": 1097
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-10T00:00:00.000Z",
        "engagementCount": 901
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-10T00:00:00.000Z",
        "engagementCount": 1072
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-10T00:00:00.000Z",
        "engagementCount": 1619
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-10T00:00:00.000Z",
        "engagementCount": 2067
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-11T00:00:00.000Z",
        "engagementCount": 1001
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-11T00:00:00.000Z",
        "engagementCount": 1102
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-11T00:00:00.000Z",
        "engagementCount": 1590
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-11T00:00:00.000Z",
        "engagementCount": 1350
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-11T00:00:00.000Z",
        "engagementCount": 1765
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-12T00:00:00.000Z",
        "engagementCount": 1532
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-12T00:00:00.000Z",
        "engagementCount": 1436
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-12T00:00:00.000Z",
        "engagementCount": 864
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-12T00:00:00.000Z",
        "engagementCount": 1772
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-12T00:00:00.000Z",
        "engagementCount": 1956
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-13T00:00:00.000Z",
        "engagementCount": 1262
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-13T00:00:00.000Z",
        "engagementCount": 893
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-13T00:00:00.000Z",
        "engagementCount": 1476
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-13T00:00:00.000Z",
        "engagementCount": 1470
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-13T00:00:00.000Z",
        "engagementCount": 1139
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-14T00:00:00.000Z",
        "engagementCount": 586
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-14T00:00:00.000Z",
        "engagementCount": 1079
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-14T00:00:00.000Z",
        "engagementCount": 867
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-14T00:00:00.000Z",
        "engagementCount": 1390
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-14T00:00:00.000Z",
        "engagementCount": 813
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-15T00:00:00.000Z",
        "engagementCount": 1464
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-15T00:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-15T00:00:00.000Z",
        "engagementCount": 1696
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-15T00:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-15T00:00:00.000Z",
        "engagementCount": 821
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-16T00:00:00.000Z",
        "engagementCount": 1415
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-16T00:00:00.000Z",
        "engagementCount": 727
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-16T00:00:00.000Z",
        "engagementCount": 1669
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-16T00:00:00.000Z",
        "engagementCount": 1935
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-16T00:00:00.000Z",
        "engagementCount": 1625
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-17T00:00:00.000Z",
        "engagementCount": 1382
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-17T00:00:00.000Z",
        "engagementCount": 690
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-17T00:00:00.000Z",
        "engagementCount": 686
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-17T00:00:00.000Z",
        "engagementCount": 842
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-17T00:00:00.000Z",
        "engagementCount": 2085
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-18T00:00:00.000Z",
        "engagementCount": 1403
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-18T00:00:00.000Z",
        "engagementCount": 1694
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-18T00:00:00.000Z",
        "engagementCount": 1351
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-18T00:00:00.000Z",
        "engagementCount": 2042
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-18T00:00:00.000Z",
        "engagementCount": 1096
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-19T00:00:00.000Z",
        "engagementCount": 1209
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-19T00:00:00.000Z",
        "engagementCount": 1246
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-19T00:00:00.000Z",
        "engagementCount": 956
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-19T00:00:00.000Z",
        "engagementCount": 781
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-19T00:00:00.000Z",
        "engagementCount": 1472
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-20T00:00:00.000Z",
        "engagementCount": 616
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-20T00:00:00.000Z",
        "engagementCount": 1032
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-20T00:00:00.000Z",
        "engagementCount": 941
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-20T00:00:00.000Z",
        "engagementCount": 1548
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-20T00:00:00.000Z",
        "engagementCount": 1497
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-21T00:00:00.000Z",
        "engagementCount": 514
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-21T00:00:00.000Z",
        "engagementCount": 1329
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-21T00:00:00.000Z",
        "engagementCount": 1025
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-21T00:00:00.000Z",
        "engagementCount": 1281
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-21T00:00:00.000Z",
        "engagementCount": 1773
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-22T00:00:00.000Z",
        "engagementCount": 1487
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-22T00:00:00.000Z",
        "engagementCount": 1008
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-22T00:00:00.000Z",
        "engagementCount": 736
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-22T00:00:00.000Z",
        "engagementCount": 1750
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-22T00:00:00.000Z",
        "engagementCount": 1844
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-23T00:00:00.000Z",
        "engagementCount": 1133
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-23T00:00:00.000Z",
        "engagementCount": 1173
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-23T00:00:00.000Z",
        "engagementCount": 1617
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-23T00:00:00.000Z",
        "engagementCount": 827
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-23T00:00:00.000Z",
        "engagementCount": 1429
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-24T00:00:00.000Z",
        "engagementCount": 994
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-24T00:00:00.000Z",
        "engagementCount": 864
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-24T00:00:00.000Z",
        "engagementCount": 1319
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-24T00:00:00.000Z",
        "engagementCount": 1375
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-24T00:00:00.000Z",
        "engagementCount": 1917
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-25T00:00:00.000Z",
        "engagementCount": 567
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-25T00:00:00.000Z",
        "engagementCount": 1113
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-25T00:00:00.000Z",
        "engagementCount": 826
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-25T00:00:00.000Z",
        "engagementCount": 1035
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-25T00:00:00.000Z",
        "engagementCount": 1176
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-26T00:00:00.000Z",
        "engagementCount": 1256
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-26T00:00:00.000Z",
        "engagementCount": 792
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-26T00:00:00.000Z",
        "engagementCount": 1106
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-26T00:00:00.000Z",
        "engagementCount": 734
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-26T00:00:00.000Z",
        "engagementCount": 2273
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-27T00:00:00.000Z",
        "engagementCount": 843
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-27T00:00:00.000Z",
        "engagementCount": 1410
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-27T00:00:00.000Z",
        "engagementCount": 1181
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-27T00:00:00.000Z",
        "engagementCount": 1382
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-27T00:00:00.000Z",
        "engagementCount": 1975
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-28T00:00:00.000Z",
        "engagementCount": 1436
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-28T00:00:00.000Z",
        "engagementCount": 1440
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-28T00:00:00.000Z",
        "engagementCount": 1535
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-28T00:00:00.000Z",
        "engagementCount": 1004
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-28T00:00:00.000Z",
        "engagementCount": 1780
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-29T00:00:00.000Z",
        "engagementCount": 1188
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-29T00:00:00.000Z",
        "engagementCount": 1164
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-29T00:00:00.000Z",
        "engagementCount": 1477
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-29T00:00:00.000Z",
        "engagementCount": 1393
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-29T00:00:00.000Z",
        "engagementCount": 1962
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2020-12-30T00:00:00.000Z",
        "engagementCount": 522
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2020-12-30T00:00:00.000Z",
        "engagementCount": 606
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2020-12-30T00:00:00.000Z",
        "engagementCount": 1008
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2020-12-30T00:00:00.000Z",
        "engagementCount": 1257
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2020-12-30T00:00:00.000Z",
        "engagementCount": 1427
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-01T00:00:00.000Z",
        "engagementCount": 1050
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-01T00:00:00.000Z",
        "engagementCount": 636
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-01T00:00:00.000Z",
        "engagementCount": 954
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-01T00:00:00.000Z",
        "engagementCount": 2011
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-01T00:00:00.000Z",
        "engagementCount": 1738
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-02T00:00:00.000Z",
        "engagementCount": 1369
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-02T00:00:00.000Z",
        "engagementCount": 1023
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-02T00:00:00.000Z",
        "engagementCount": 1625
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-02T00:00:00.000Z",
        "engagementCount": 2075
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-02T00:00:00.000Z",
        "engagementCount": 1997
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-03T00:00:00.000Z",
        "engagementCount": 572
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-03T00:00:00.000Z",
        "engagementCount": 1450
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-03T00:00:00.000Z",
        "engagementCount": 1090
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-03T00:00:00.000Z",
        "engagementCount": 1043
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-03T00:00:00.000Z",
        "engagementCount": 1468
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-04T00:00:00.000Z",
        "engagementCount": 658
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-04T00:00:00.000Z",
        "engagementCount": 1597
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-04T00:00:00.000Z",
        "engagementCount": 1861
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-04T00:00:00.000Z",
        "engagementCount": 745
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-04T00:00:00.000Z",
        "engagementCount": 902
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-05T00:00:00.000Z",
        "engagementCount": 760
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-05T00:00:00.000Z",
        "engagementCount": 1076
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-05T00:00:00.000Z",
        "engagementCount": 1190
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-05T00:00:00.000Z",
        "engagementCount": 1067
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-05T00:00:00.000Z",
        "engagementCount": 1584
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-06T00:00:00.000Z",
        "engagementCount": 698
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-06T00:00:00.000Z",
        "engagementCount": 648
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-06T00:00:00.000Z",
        "engagementCount": 1066
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-06T00:00:00.000Z",
        "engagementCount": 1059
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-06T00:00:00.000Z",
        "engagementCount": 1666
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-07T00:00:00.000Z",
        "engagementCount": 1361
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-07T00:00:00.000Z",
        "engagementCount": 1150
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-07T00:00:00.000Z",
        "engagementCount": 1115
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-07T00:00:00.000Z",
        "engagementCount": 1908
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-07T00:00:00.000Z",
        "engagementCount": 1375
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-08T00:00:00.000Z",
        "engagementCount": 777
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-08T00:00:00.000Z",
        "engagementCount": 860
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-08T00:00:00.000Z",
        "engagementCount": 1792
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-08T00:00:00.000Z",
        "engagementCount": 1455
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-08T00:00:00.000Z",
        "engagementCount": 1604
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-09T00:00:00.000Z",
        "engagementCount": 1446
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-09T00:00:00.000Z",
        "engagementCount": 1476
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-09T00:00:00.000Z",
        "engagementCount": 1319
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-09T00:00:00.000Z",
        "engagementCount": 1523
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-09T00:00:00.000Z",
        "engagementCount": 826
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-10T00:00:00.000Z",
        "engagementCount": 1474
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-10T00:00:00.000Z",
        "engagementCount": 1522
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-10T00:00:00.000Z",
        "engagementCount": 1432
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-10T00:00:00.000Z",
        "engagementCount": 736
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-10T00:00:00.000Z",
        "engagementCount": 1938
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-11T00:00:00.000Z",
        "engagementCount": 585
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-11T00:00:00.000Z",
        "engagementCount": 1332
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-11T00:00:00.000Z",
        "engagementCount": 1402
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-11T00:00:00.000Z",
        "engagementCount": 2065
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-11T00:00:00.000Z",
        "engagementCount": 1393
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-12T00:00:00.000Z",
        "engagementCount": 806
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-12T00:00:00.000Z",
        "engagementCount": 899
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-12T00:00:00.000Z",
        "engagementCount": 1329
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-12T00:00:00.000Z",
        "engagementCount": 752
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-12T00:00:00.000Z",
        "engagementCount": 904
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-13T00:00:00.000Z",
        "engagementCount": 1299
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-13T00:00:00.000Z",
        "engagementCount": 1130
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-13T00:00:00.000Z",
        "engagementCount": 1722
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-13T00:00:00.000Z",
        "engagementCount": 765
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-13T00:00:00.000Z",
        "engagementCount": 1988
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-14T00:00:00.000Z",
        "engagementCount": 1090
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-14T00:00:00.000Z",
        "engagementCount": 1111
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-14T00:00:00.000Z",
        "engagementCount": 1718
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-14T00:00:00.000Z",
        "engagementCount": 767
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-14T00:00:00.000Z",
        "engagementCount": 1343
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-15T00:00:00.000Z",
        "engagementCount": 535
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-15T00:00:00.000Z",
        "engagementCount": 601
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-15T00:00:00.000Z",
        "engagementCount": 793
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-15T00:00:00.000Z",
        "engagementCount": 1013
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-15T00:00:00.000Z",
        "engagementCount": 1442
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-16T00:00:00.000Z",
        "engagementCount": 1502
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-16T00:00:00.000Z",
        "engagementCount": 1391
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-16T00:00:00.000Z",
        "engagementCount": 1544
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-16T00:00:00.000Z",
        "engagementCount": 1628
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-16T00:00:00.000Z",
        "engagementCount": 1494
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-17T00:00:00.000Z",
        "engagementCount": 1187
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-17T00:00:00.000Z",
        "engagementCount": 654
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-17T00:00:00.000Z",
        "engagementCount": 926
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-17T00:00:00.000Z",
        "engagementCount": 1612
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-17T00:00:00.000Z",
        "engagementCount": 1425
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-18T00:00:00.000Z",
        "engagementCount": 918
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-18T00:00:00.000Z",
        "engagementCount": 1107
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-18T00:00:00.000Z",
        "engagementCount": 1097
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-18T00:00:00.000Z",
        "engagementCount": 1273
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-18T00:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-19T00:00:00.000Z",
        "engagementCount": 881
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-19T00:00:00.000Z",
        "engagementCount": 1133
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-19T00:00:00.000Z",
        "engagementCount": 792
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-19T00:00:00.000Z",
        "engagementCount": 732
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-19T00:00:00.000Z",
        "engagementCount": 1127
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-20T00:00:00.000Z",
        "engagementCount": 878
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-20T00:00:00.000Z",
        "engagementCount": 1111
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-20T00:00:00.000Z",
        "engagementCount": 1442
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-20T00:00:00.000Z",
        "engagementCount": 1428
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-20T00:00:00.000Z",
        "engagementCount": 841
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-21T00:00:00.000Z",
        "engagementCount": 1136
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-21T00:00:00.000Z",
        "engagementCount": 1427
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-21T00:00:00.000Z",
        "engagementCount": 679
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-21T00:00:00.000Z",
        "engagementCount": 1293
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-21T00:00:00.000Z",
        "engagementCount": 1230
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-22T00:00:00.000Z",
        "engagementCount": 512
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-22T00:00:00.000Z",
        "engagementCount": 1247
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-22T00:00:00.000Z",
        "engagementCount": 1695
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-22T00:00:00.000Z",
        "engagementCount": 1295
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-22T00:00:00.000Z",
        "engagementCount": 956
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-23T00:00:00.000Z",
        "engagementCount": 1390
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-23T00:00:00.000Z",
        "engagementCount": 1430
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-23T00:00:00.000Z",
        "engagementCount": 866
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-23T00:00:00.000Z",
        "engagementCount": 1739
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-23T00:00:00.000Z",
        "engagementCount": 2136
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-24T00:00:00.000Z",
        "engagementCount": 911
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-24T00:00:00.000Z",
        "engagementCount": 1511
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-24T00:00:00.000Z",
        "engagementCount": 1576
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-24T00:00:00.000Z",
        "engagementCount": 1471
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-24T00:00:00.000Z",
        "engagementCount": 2259
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-25T00:00:00.000Z",
        "engagementCount": 1212
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-25T00:00:00.000Z",
        "engagementCount": 1271
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-25T00:00:00.000Z",
        "engagementCount": 1546
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-25T00:00:00.000Z",
        "engagementCount": 1370
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-25T00:00:00.000Z",
        "engagementCount": 2020
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-26T00:00:00.000Z",
        "engagementCount": 1153
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-26T00:00:00.000Z",
        "engagementCount": 1660
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-26T00:00:00.000Z",
        "engagementCount": 980
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-26T00:00:00.000Z",
        "engagementCount": 1880
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-26T00:00:00.000Z",
        "engagementCount": 2204
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-27T00:00:00.000Z",
        "engagementCount": 1490
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-27T00:00:00.000Z",
        "engagementCount": 1470
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-27T00:00:00.000Z",
        "engagementCount": 687
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-27T00:00:00.000Z",
        "engagementCount": 938
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-27T00:00:00.000Z",
        "engagementCount": 1415
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-28T00:00:00.000Z",
        "engagementCount": 1068
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-28T00:00:00.000Z",
        "engagementCount": 1105
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-28T00:00:00.000Z",
        "engagementCount": 1099
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-28T00:00:00.000Z",
        "engagementCount": 1669
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-28T00:00:00.000Z",
        "engagementCount": 2185
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-29T00:00:00.000Z",
        "engagementCount": 565
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-29T00:00:00.000Z",
        "engagementCount": 1149
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-29T00:00:00.000Z",
        "engagementCount": 1310
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-29T00:00:00.000Z",
        "engagementCount": 1795
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-29T00:00:00.000Z",
        "engagementCount": 2215
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-30T00:00:00.000Z",
        "engagementCount": 758
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-30T00:00:00.000Z",
        "engagementCount": 1045
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-30T00:00:00.000Z",
        "engagementCount": 1162
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-30T00:00:00.000Z",
        "engagementCount": 1157
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-30T00:00:00.000Z",
        "engagementCount": 1161
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-01-31T00:00:00.000Z",
        "engagementCount": 1099
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-01-31T00:00:00.000Z",
        "engagementCount": 1310
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-01-31T00:00:00.000Z",
        "engagementCount": 1519
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-01-31T00:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-01-31T00:00:00.000Z",
        "engagementCount": 2003
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-01T00:00:00.000Z",
        "engagementCount": 1224
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-01T00:00:00.000Z",
        "engagementCount": 1368
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-01T00:00:00.000Z",
        "engagementCount": 1687
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-01T00:00:00.000Z",
        "engagementCount": 1117
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-01T00:00:00.000Z",
        "engagementCount": 2008
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-02T00:00:00.000Z",
        "engagementCount": 737
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-02T00:00:00.000Z",
        "engagementCount": 737
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-02T00:00:00.000Z",
        "engagementCount": 1058
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-02T00:00:00.000Z",
        "engagementCount": 843
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-02T00:00:00.000Z",
        "engagementCount": 884
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-03T00:00:00.000Z",
        "engagementCount": 802
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-03T00:00:00.000Z",
        "engagementCount": 1665
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-03T00:00:00.000Z",
        "engagementCount": 2017
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-03T00:00:00.000Z",
        "engagementCount": 2054
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-03T00:00:00.000Z",
        "engagementCount": 1649
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-04T00:00:00.000Z",
        "engagementCount": 1010
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-04T00:00:00.000Z",
        "engagementCount": 1217
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-04T00:00:00.000Z",
        "engagementCount": 1110
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-04T00:00:00.000Z",
        "engagementCount": 2284
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-04T00:00:00.000Z",
        "engagementCount": 1072
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-05T00:00:00.000Z",
        "engagementCount": 1684
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-05T00:00:00.000Z",
        "engagementCount": 1425
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-05T00:00:00.000Z",
        "engagementCount": 1468
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-05T00:00:00.000Z",
        "engagementCount": 2093
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-05T00:00:00.000Z",
        "engagementCount": 1388
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-06T00:00:00.000Z",
        "engagementCount": 1268
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-06T00:00:00.000Z",
        "engagementCount": 1027
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-06T00:00:00.000Z",
        "engagementCount": 1760
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-06T00:00:00.000Z",
        "engagementCount": 2148
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-06T00:00:00.000Z",
        "engagementCount": 1709
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-07T00:00:00.000Z",
        "engagementCount": 1341
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-07T00:00:00.000Z",
        "engagementCount": 863
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-07T00:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-07T00:00:00.000Z",
        "engagementCount": 1484
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-07T00:00:00.000Z",
        "engagementCount": 919
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-08T00:00:00.000Z",
        "engagementCount": 627
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-08T00:00:00.000Z",
        "engagementCount": 1783
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-08T00:00:00.000Z",
        "engagementCount": 942
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-08T00:00:00.000Z",
        "engagementCount": 1499
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-08T00:00:00.000Z",
        "engagementCount": 1503
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-09T00:00:00.000Z",
        "engagementCount": 730
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-09T00:00:00.000Z",
        "engagementCount": 1940
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-09T00:00:00.000Z",
        "engagementCount": 1398
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-09T00:00:00.000Z",
        "engagementCount": 2017
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-09T00:00:00.000Z",
        "engagementCount": 1690
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-10T00:00:00.000Z",
        "engagementCount": 1160
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-10T00:00:00.000Z",
        "engagementCount": 941
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-10T00:00:00.000Z",
        "engagementCount": 969
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-10T00:00:00.000Z",
        "engagementCount": 1865
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-10T00:00:00.000Z",
        "engagementCount": 1107
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-11T00:00:00.000Z",
        "engagementCount": 1718
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-11T00:00:00.000Z",
        "engagementCount": 1529
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-11T00:00:00.000Z",
        "engagementCount": 1981
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-11T00:00:00.000Z",
        "engagementCount": 1800
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-11T00:00:00.000Z",
        "engagementCount": 2485
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-12T00:00:00.000Z",
        "engagementCount": 725
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-12T00:00:00.000Z",
        "engagementCount": 1921
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-12T00:00:00.000Z",
        "engagementCount": 1019
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-12T00:00:00.000Z",
        "engagementCount": 1334
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-12T00:00:00.000Z",
        "engagementCount": 2324
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-13T00:00:00.000Z",
        "engagementCount": 1234
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-13T00:00:00.000Z",
        "engagementCount": 1354
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-13T00:00:00.000Z",
        "engagementCount": 733
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-13T00:00:00.000Z",
        "engagementCount": 1082
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-13T00:00:00.000Z",
        "engagementCount": 2542
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-14T00:00:00.000Z",
        "engagementCount": 1120
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-14T00:00:00.000Z",
        "engagementCount": 1877
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-14T00:00:00.000Z",
        "engagementCount": 1794
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-14T00:00:00.000Z",
        "engagementCount": 1943
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-14T00:00:00.000Z",
        "engagementCount": 1979
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-15T00:00:00.000Z",
        "engagementCount": 754
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-15T00:00:00.000Z",
        "engagementCount": 1131
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-15T00:00:00.000Z",
        "engagementCount": 1482
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-15T00:00:00.000Z",
        "engagementCount": 1932
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-15T00:00:00.000Z",
        "engagementCount": 2293
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-16T00:00:00.000Z",
        "engagementCount": 1314
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-16T00:00:00.000Z",
        "engagementCount": 1201
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-16T00:00:00.000Z",
        "engagementCount": 990
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-16T00:00:00.000Z",
        "engagementCount": 969
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-16T00:00:00.000Z",
        "engagementCount": 2038
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-17T00:00:00.000Z",
        "engagementCount": 1421
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-17T00:00:00.000Z",
        "engagementCount": 1509
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-17T00:00:00.000Z",
        "engagementCount": 1496
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-17T00:00:00.000Z",
        "engagementCount": 1523
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-17T00:00:00.000Z",
        "engagementCount": 1363
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-18T00:00:00.000Z",
        "engagementCount": 1181
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-18T00:00:00.000Z",
        "engagementCount": 1421
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-18T00:00:00.000Z",
        "engagementCount": 1937
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-18T00:00:00.000Z",
        "engagementCount": 2039
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-18T00:00:00.000Z",
        "engagementCount": 1064
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-19T00:00:00.000Z",
        "engagementCount": 1451
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-19T00:00:00.000Z",
        "engagementCount": 1775
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-19T00:00:00.000Z",
        "engagementCount": 1311
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-19T00:00:00.000Z",
        "engagementCount": 1619
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-19T00:00:00.000Z",
        "engagementCount": 1131
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-20T00:00:00.000Z",
        "engagementCount": 1104
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-20T00:00:00.000Z",
        "engagementCount": 1892
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-20T00:00:00.000Z",
        "engagementCount": 1384
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-20T00:00:00.000Z",
        "engagementCount": 1422
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-20T00:00:00.000Z",
        "engagementCount": 1547
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-21T00:00:00.000Z",
        "engagementCount": 873
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-21T00:00:00.000Z",
        "engagementCount": 1480
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-21T00:00:00.000Z",
        "engagementCount": 2072
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-21T00:00:00.000Z",
        "engagementCount": 1996
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-21T00:00:00.000Z",
        "engagementCount": 1822
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-22T00:00:00.000Z",
        "engagementCount": 1081
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-22T00:00:00.000Z",
        "engagementCount": 803
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-22T00:00:00.000Z",
        "engagementCount": 1770
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-22T00:00:00.000Z",
        "engagementCount": 1868
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-22T00:00:00.000Z",
        "engagementCount": 2438
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-23T00:00:00.000Z",
        "engagementCount": 1514
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-23T00:00:00.000Z",
        "engagementCount": 1633
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-23T00:00:00.000Z",
        "engagementCount": 1251
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-23T00:00:00.000Z",
        "engagementCount": 1035
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-23T00:00:00.000Z",
        "engagementCount": 2046
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-24T00:00:00.000Z",
        "engagementCount": 1210
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-24T00:00:00.000Z",
        "engagementCount": 1403
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-24T00:00:00.000Z",
        "engagementCount": 1066
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-24T00:00:00.000Z",
        "engagementCount": 1476
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-24T00:00:00.000Z",
        "engagementCount": 2099
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-25T00:00:00.000Z",
        "engagementCount": 704
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-25T00:00:00.000Z",
        "engagementCount": 1275
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-25T00:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-25T00:00:00.000Z",
        "engagementCount": 1969
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-25T00:00:00.000Z",
        "engagementCount": 873
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-26T00:00:00.000Z",
        "engagementCount": 1049
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-26T00:00:00.000Z",
        "engagementCount": 1599
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-26T00:00:00.000Z",
        "engagementCount": 1918
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-26T00:00:00.000Z",
        "engagementCount": 1826
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-26T00:00:00.000Z",
        "engagementCount": 1700
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-27T00:00:00.000Z",
        "engagementCount": 1632
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-27T00:00:00.000Z",
        "engagementCount": 1615
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-27T00:00:00.000Z",
        "engagementCount": 1401
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-27T00:00:00.000Z",
        "engagementCount": 2170
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-27T00:00:00.000Z",
        "engagementCount": 1022
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-02-28T00:00:00.000Z",
        "engagementCount": 616
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-02-28T00:00:00.000Z",
        "engagementCount": 1697
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-02-28T00:00:00.000Z",
        "engagementCount": 1062
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-02-28T00:00:00.000Z",
        "engagementCount": 2152
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-02-28T00:00:00.000Z",
        "engagementCount": 2306
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 622
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 1643
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 1591
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 1269
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 1102
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 794
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 1456
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 986
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 2238
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 2189
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 1317
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 1318
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 1492
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 874
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 2057
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 994
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 1775
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 2209
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 2643
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-01T00:00:00.000Z",
        "engagementCount": 1696
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 1367
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 2142
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 1964
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 1111
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-02T00:00:00.000Z",
        "engagementCount": 1628
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 1221
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 1871
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 1349
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 2646
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-03T00:00:00.000Z",
        "engagementCount": 2665
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-04T00:00:00.000Z",
        "engagementCount": 1872
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-04T00:00:00.000Z",
        "engagementCount": 1647
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-04T00:00:00.000Z",
        "engagementCount": 927
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-04T00:00:00.000Z",
        "engagementCount": 1624
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-04T00:00:00.000Z",
        "engagementCount": 1196
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-05T00:00:00.000Z",
        "engagementCount": 1156
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-05T00:00:00.000Z",
        "engagementCount": 1037
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-05T00:00:00.000Z",
        "engagementCount": 997
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-05T00:00:00.000Z",
        "engagementCount": 939
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-05T00:00:00.000Z",
        "engagementCount": 1710
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-06T00:00:00.000Z",
        "engagementCount": 1669
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-06T00:00:00.000Z",
        "engagementCount": 1345
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-06T00:00:00.000Z",
        "engagementCount": 1073
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-06T00:00:00.000Z",
        "engagementCount": 1878
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-06T00:00:00.000Z",
        "engagementCount": 2331
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-07T00:00:00.000Z",
        "engagementCount": 679
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-07T00:00:00.000Z",
        "engagementCount": 1803
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-07T00:00:00.000Z",
        "engagementCount": 1724
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-07T00:00:00.000Z",
        "engagementCount": 2644
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-07T00:00:00.000Z",
        "engagementCount": 1690
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-08T00:00:00.000Z",
        "engagementCount": 1179
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-08T00:00:00.000Z",
        "engagementCount": 1200
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-08T00:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-08T00:00:00.000Z",
        "engagementCount": 930
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-08T00:00:00.000Z",
        "engagementCount": 1824
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-09T00:00:00.000Z",
        "engagementCount": 1788
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-09T00:00:00.000Z",
        "engagementCount": 1490
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-09T00:00:00.000Z",
        "engagementCount": 2184
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-09T00:00:00.000Z",
        "engagementCount": 1266
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-09T00:00:00.000Z",
        "engagementCount": 2661
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-10T00:00:00.000Z",
        "engagementCount": 901
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-10T00:00:00.000Z",
        "engagementCount": 2081
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-10T00:00:00.000Z",
        "engagementCount": 879
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-10T00:00:00.000Z",
        "engagementCount": 1538
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-10T00:00:00.000Z",
        "engagementCount": 1765
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-11T00:00:00.000Z",
        "engagementCount": 1909
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-11T00:00:00.000Z",
        "engagementCount": 1904
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-11T00:00:00.000Z",
        "engagementCount": 2021
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-11T00:00:00.000Z",
        "engagementCount": 1456
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-11T00:00:00.000Z",
        "engagementCount": 1811
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-12T00:00:00.000Z",
        "engagementCount": 808
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-12T00:00:00.000Z",
        "engagementCount": 1595
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-12T00:00:00.000Z",
        "engagementCount": 833
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-12T00:00:00.000Z",
        "engagementCount": 1728
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-12T00:00:00.000Z",
        "engagementCount": 1816
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-13T00:00:00.000Z",
        "engagementCount": 718
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-13T00:00:00.000Z",
        "engagementCount": 1879
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-13T00:00:00.000Z",
        "engagementCount": 1093
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-13T00:00:00.000Z",
        "engagementCount": 1999
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-13T00:00:00.000Z",
        "engagementCount": 2907
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-14T00:00:00.000Z",
        "engagementCount": 1517
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-14T00:00:00.000Z",
        "engagementCount": 1053
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-14T00:00:00.000Z",
        "engagementCount": 1471
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-14T00:00:00.000Z",
        "engagementCount": 1026
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-14T00:00:00.000Z",
        "engagementCount": 1820
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-15T00:00:00.000Z",
        "engagementCount": 1895
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-15T00:00:00.000Z",
        "engagementCount": 1425
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-15T00:00:00.000Z",
        "engagementCount": 1754
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-15T00:00:00.000Z",
        "engagementCount": 972
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-15T00:00:00.000Z",
        "engagementCount": 2618
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-16T00:00:00.000Z",
        "engagementCount": 1734
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-16T00:00:00.000Z",
        "engagementCount": 1025
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-16T00:00:00.000Z",
        "engagementCount": 2281
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-16T00:00:00.000Z",
        "engagementCount": 1820
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-16T00:00:00.000Z",
        "engagementCount": 2392
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-17T00:00:00.000Z",
        "engagementCount": 1431
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-17T00:00:00.000Z",
        "engagementCount": 1339
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-17T00:00:00.000Z",
        "engagementCount": 1399
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-17T00:00:00.000Z",
        "engagementCount": 1742
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-17T00:00:00.000Z",
        "engagementCount": 1928
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-18T00:00:00.000Z",
        "engagementCount": 971
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-18T00:00:00.000Z",
        "engagementCount": 1894
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-18T00:00:00.000Z",
        "engagementCount": 2095
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-18T00:00:00.000Z",
        "engagementCount": 1294
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-18T00:00:00.000Z",
        "engagementCount": 1511
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-19T00:00:00.000Z",
        "engagementCount": 1128
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-19T00:00:00.000Z",
        "engagementCount": 1030
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-19T00:00:00.000Z",
        "engagementCount": 2186
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-19T00:00:00.000Z",
        "engagementCount": 2493
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-19T00:00:00.000Z",
        "engagementCount": 1135
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-20T00:00:00.000Z",
        "engagementCount": 1220
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-20T00:00:00.000Z",
        "engagementCount": 1947
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-20T00:00:00.000Z",
        "engagementCount": 1433
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-20T00:00:00.000Z",
        "engagementCount": 1421
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-20T00:00:00.000Z",
        "engagementCount": 1802
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-21T00:00:00.000Z",
        "engagementCount": 730
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-21T00:00:00.000Z",
        "engagementCount": 1170
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-21T00:00:00.000Z",
        "engagementCount": 1916
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-21T00:00:00.000Z",
        "engagementCount": 1962
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-21T00:00:00.000Z",
        "engagementCount": 2161
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-22T00:00:00.000Z",
        "engagementCount": 898
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-22T00:00:00.000Z",
        "engagementCount": 1331
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-22T00:00:00.000Z",
        "engagementCount": 1548
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-22T00:00:00.000Z",
        "engagementCount": 1340
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-22T00:00:00.000Z",
        "engagementCount": 1998
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-23T00:00:00.000Z",
        "engagementCount": 1234
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-23T00:00:00.000Z",
        "engagementCount": 1675
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-23T00:00:00.000Z",
        "engagementCount": 1940
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-23T00:00:00.000Z",
        "engagementCount": 2105
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-23T00:00:00.000Z",
        "engagementCount": 2490
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-24T00:00:00.000Z",
        "engagementCount": 1260
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-24T00:00:00.000Z",
        "engagementCount": 1911
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-24T00:00:00.000Z",
        "engagementCount": 1851
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-24T00:00:00.000Z",
        "engagementCount": 1716
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-24T00:00:00.000Z",
        "engagementCount": 2380
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-25T00:00:00.000Z",
        "engagementCount": 855
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-25T00:00:00.000Z",
        "engagementCount": 1439
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-25T00:00:00.000Z",
        "engagementCount": 1822
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-25T00:00:00.000Z",
        "engagementCount": 2325
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-25T00:00:00.000Z",
        "engagementCount": 2082
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-26T00:00:00.000Z",
        "engagementCount": 808
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-26T00:00:00.000Z",
        "engagementCount": 1083
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-26T00:00:00.000Z",
        "engagementCount": 1280
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-26T00:00:00.000Z",
        "engagementCount": 1479
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-26T00:00:00.000Z",
        "engagementCount": 2751
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-27T00:00:00.000Z",
        "engagementCount": 692
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-27T00:00:00.000Z",
        "engagementCount": 1546
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-27T00:00:00.000Z",
        "engagementCount": 1409
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-27T00:00:00.000Z",
        "engagementCount": 2347
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-27T00:00:00.000Z",
        "engagementCount": 1919
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-28T00:00:00.000Z",
        "engagementCount": 921
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-28T00:00:00.000Z",
        "engagementCount": 1290
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-28T00:00:00.000Z",
        "engagementCount": 1823
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-28T00:00:00.000Z",
        "engagementCount": 1809
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-28T00:00:00.000Z",
        "engagementCount": 1767
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-03-31T23:00:00.000Z",
        "engagementCount": 1665
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-03-31T23:00:00.000Z",
        "engagementCount": 1113
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-03-31T23:00:00.000Z",
        "engagementCount": 1948
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-03-31T23:00:00.000Z",
        "engagementCount": 2372
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-03-31T23:00:00.000Z",
        "engagementCount": 3075
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-01T23:00:00.000Z",
        "engagementCount": 1118
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-01T23:00:00.000Z",
        "engagementCount": 1988
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-01T23:00:00.000Z",
        "engagementCount": 991
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-01T23:00:00.000Z",
        "engagementCount": 1088
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-01T23:00:00.000Z",
        "engagementCount": 1575
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-02T23:00:00.000Z",
        "engagementCount": 1922
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-02T23:00:00.000Z",
        "engagementCount": 2369
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-02T23:00:00.000Z",
        "engagementCount": 2526
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-02T23:00:00.000Z",
        "engagementCount": 2626
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-02T23:00:00.000Z",
        "engagementCount": 2042
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-03T23:00:00.000Z",
        "engagementCount": 1593
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-03T23:00:00.000Z",
        "engagementCount": 1094
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-03T23:00:00.000Z",
        "engagementCount": 2215
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-03T23:00:00.000Z",
        "engagementCount": 1258
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-03T23:00:00.000Z",
        "engagementCount": 1846
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-04T23:00:00.000Z",
        "engagementCount": 1121
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-04T23:00:00.000Z",
        "engagementCount": 2284
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-04T23:00:00.000Z",
        "engagementCount": 1441
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-04T23:00:00.000Z",
        "engagementCount": 1724
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-04T23:00:00.000Z",
        "engagementCount": 1841
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-05T23:00:00.000Z",
        "engagementCount": 804
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-05T23:00:00.000Z",
        "engagementCount": 2272
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-05T23:00:00.000Z",
        "engagementCount": 1375
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-05T23:00:00.000Z",
        "engagementCount": 1060
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-05T23:00:00.000Z",
        "engagementCount": 1335
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-06T23:00:00.000Z",
        "engagementCount": 1261
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-06T23:00:00.000Z",
        "engagementCount": 1512
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-06T23:00:00.000Z",
        "engagementCount": 1913
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-06T23:00:00.000Z",
        "engagementCount": 1367
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-06T23:00:00.000Z",
        "engagementCount": 2034
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-07T23:00:00.000Z",
        "engagementCount": 1478
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-07T23:00:00.000Z",
        "engagementCount": 1607
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-07T23:00:00.000Z",
        "engagementCount": 2574
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-07T23:00:00.000Z",
        "engagementCount": 2209
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-07T23:00:00.000Z",
        "engagementCount": 2804
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-08T23:00:00.000Z",
        "engagementCount": 1800
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-08T23:00:00.000Z",
        "engagementCount": 1330
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-08T23:00:00.000Z",
        "engagementCount": 966
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-08T23:00:00.000Z",
        "engagementCount": 1973
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-08T23:00:00.000Z",
        "engagementCount": 1189
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-09T23:00:00.000Z",
        "engagementCount": 1709
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-09T23:00:00.000Z",
        "engagementCount": 2155
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-09T23:00:00.000Z",
        "engagementCount": 2691
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-09T23:00:00.000Z",
        "engagementCount": 1495
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-09T23:00:00.000Z",
        "engagementCount": 1803
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-10T23:00:00.000Z",
        "engagementCount": 1242
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-10T23:00:00.000Z",
        "engagementCount": 2190
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-10T23:00:00.000Z",
        "engagementCount": 1473
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-10T23:00:00.000Z",
        "engagementCount": 2153
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-10T23:00:00.000Z",
        "engagementCount": 1918
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-11T23:00:00.000Z",
        "engagementCount": 1890
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-11T23:00:00.000Z",
        "engagementCount": 1119
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-11T23:00:00.000Z",
        "engagementCount": 2594
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-11T23:00:00.000Z",
        "engagementCount": 1632
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-11T23:00:00.000Z",
        "engagementCount": 3026
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-12T23:00:00.000Z",
        "engagementCount": 1372
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-12T23:00:00.000Z",
        "engagementCount": 1940
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-12T23:00:00.000Z",
        "engagementCount": 1587
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-12T23:00:00.000Z",
        "engagementCount": 1652
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-12T23:00:00.000Z",
        "engagementCount": 1106
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-13T23:00:00.000Z",
        "engagementCount": 2119
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-13T23:00:00.000Z",
        "engagementCount": 1729
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-13T23:00:00.000Z",
        "engagementCount": 1752
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-13T23:00:00.000Z",
        "engagementCount": 1994
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-13T23:00:00.000Z",
        "engagementCount": 1505
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-14T23:00:00.000Z",
        "engagementCount": 1905
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-14T23:00:00.000Z",
        "engagementCount": 1240
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-14T23:00:00.000Z",
        "engagementCount": 1798
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-14T23:00:00.000Z",
        "engagementCount": 2128
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-14T23:00:00.000Z",
        "engagementCount": 2078
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-15T23:00:00.000Z",
        "engagementCount": 911
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-15T23:00:00.000Z",
        "engagementCount": 1749
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-15T23:00:00.000Z",
        "engagementCount": 1397
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-15T23:00:00.000Z",
        "engagementCount": 1748
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-15T23:00:00.000Z",
        "engagementCount": 2998
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-16T23:00:00.000Z",
        "engagementCount": 1940
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-16T23:00:00.000Z",
        "engagementCount": 881
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-16T23:00:00.000Z",
        "engagementCount": 2353
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-16T23:00:00.000Z",
        "engagementCount": 2696
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-16T23:00:00.000Z",
        "engagementCount": 3057
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-17T23:00:00.000Z",
        "engagementCount": 1399
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-17T23:00:00.000Z",
        "engagementCount": 1330
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-17T23:00:00.000Z",
        "engagementCount": 977
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-17T23:00:00.000Z",
        "engagementCount": 2377
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-17T23:00:00.000Z",
        "engagementCount": 1853
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-18T23:00:00.000Z",
        "engagementCount": 1542
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-18T23:00:00.000Z",
        "engagementCount": 1164
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-18T23:00:00.000Z",
        "engagementCount": 1014
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-18T23:00:00.000Z",
        "engagementCount": 1143
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-18T23:00:00.000Z",
        "engagementCount": 2190
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-19T23:00:00.000Z",
        "engagementCount": 2080
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-19T23:00:00.000Z",
        "engagementCount": 1494
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-19T23:00:00.000Z",
        "engagementCount": 2279
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-19T23:00:00.000Z",
        "engagementCount": 2142
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-19T23:00:00.000Z",
        "engagementCount": 2930
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-20T23:00:00.000Z",
        "engagementCount": 783
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-20T23:00:00.000Z",
        "engagementCount": 2063
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-20T23:00:00.000Z",
        "engagementCount": 934
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-20T23:00:00.000Z",
        "engagementCount": 2030
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-20T23:00:00.000Z",
        "engagementCount": 2788
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-21T23:00:00.000Z",
        "engagementCount": 1396
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-21T23:00:00.000Z",
        "engagementCount": 1252
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-21T23:00:00.000Z",
        "engagementCount": 1602
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-21T23:00:00.000Z",
        "engagementCount": 1523
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-21T23:00:00.000Z",
        "engagementCount": 1550
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-22T23:00:00.000Z",
        "engagementCount": 738
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-22T23:00:00.000Z",
        "engagementCount": 878
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-22T23:00:00.000Z",
        "engagementCount": 1601
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-22T23:00:00.000Z",
        "engagementCount": 1245
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-22T23:00:00.000Z",
        "engagementCount": 1361
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-23T23:00:00.000Z",
        "engagementCount": 1252
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-23T23:00:00.000Z",
        "engagementCount": 995
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-23T23:00:00.000Z",
        "engagementCount": 1118
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-23T23:00:00.000Z",
        "engagementCount": 2631
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-23T23:00:00.000Z",
        "engagementCount": 1660
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-24T23:00:00.000Z",
        "engagementCount": 1897
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-24T23:00:00.000Z",
        "engagementCount": 851
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-24T23:00:00.000Z",
        "engagementCount": 1812
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-24T23:00:00.000Z",
        "engagementCount": 1407
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-24T23:00:00.000Z",
        "engagementCount": 2875
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-25T23:00:00.000Z",
        "engagementCount": 2095
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-25T23:00:00.000Z",
        "engagementCount": 1861
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-25T23:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-25T23:00:00.000Z",
        "engagementCount": 2644
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-25T23:00:00.000Z",
        "engagementCount": 2375
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-26T23:00:00.000Z",
        "engagementCount": 1162
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-26T23:00:00.000Z",
        "engagementCount": 1387
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-26T23:00:00.000Z",
        "engagementCount": 2434
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-26T23:00:00.000Z",
        "engagementCount": 1556
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-26T23:00:00.000Z",
        "engagementCount": 1168
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-27T23:00:00.000Z",
        "engagementCount": 1927
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-27T23:00:00.000Z",
        "engagementCount": 1824
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-27T23:00:00.000Z",
        "engagementCount": 1097
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-27T23:00:00.000Z",
        "engagementCount": 2866
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-27T23:00:00.000Z",
        "engagementCount": 2600
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-28T23:00:00.000Z",
        "engagementCount": 1123
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-28T23:00:00.000Z",
        "engagementCount": 909
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-28T23:00:00.000Z",
        "engagementCount": 2231
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-28T23:00:00.000Z",
        "engagementCount": 1671
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-28T23:00:00.000Z",
        "engagementCount": 2976
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-29T23:00:00.000Z",
        "engagementCount": 1877
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-29T23:00:00.000Z",
        "engagementCount": 814
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-29T23:00:00.000Z",
        "engagementCount": 2397
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-29T23:00:00.000Z",
        "engagementCount": 1021
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-29T23:00:00.000Z",
        "engagementCount": 1365
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 911
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 1106
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 1416
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 2804
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 2934
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 814
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 2207
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 2065
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 1538
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-04-30T23:00:00.000Z",
        "engagementCount": 3436
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-01T23:00:00.000Z",
        "engagementCount": 972
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-01T23:00:00.000Z",
        "engagementCount": 944
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-01T23:00:00.000Z",
        "engagementCount": 1490
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-01T23:00:00.000Z",
        "engagementCount": 2245
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-01T23:00:00.000Z",
        "engagementCount": 3403
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-02T23:00:00.000Z",
        "engagementCount": 2207
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-02T23:00:00.000Z",
        "engagementCount": 2096
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-02T23:00:00.000Z",
        "engagementCount": 1383
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-02T23:00:00.000Z",
        "engagementCount": 1226
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-02T23:00:00.000Z",
        "engagementCount": 2273
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-03T23:00:00.000Z",
        "engagementCount": 1110
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-03T23:00:00.000Z",
        "engagementCount": 1765
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-03T23:00:00.000Z",
        "engagementCount": 2555
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-03T23:00:00.000Z",
        "engagementCount": 2238
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-03T23:00:00.000Z",
        "engagementCount": 1699
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-04T23:00:00.000Z",
        "engagementCount": 2254
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-04T23:00:00.000Z",
        "engagementCount": 1999
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-04T23:00:00.000Z",
        "engagementCount": 2801
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-04T23:00:00.000Z",
        "engagementCount": 2442
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-04T23:00:00.000Z",
        "engagementCount": 2453
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-05T23:00:00.000Z",
        "engagementCount": 2359
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-05T23:00:00.000Z",
        "engagementCount": 1749
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-05T23:00:00.000Z",
        "engagementCount": 2501
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-05T23:00:00.000Z",
        "engagementCount": 1804
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-05T23:00:00.000Z",
        "engagementCount": 2687
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-06T23:00:00.000Z",
        "engagementCount": 2026
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-06T23:00:00.000Z",
        "engagementCount": 2046
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-06T23:00:00.000Z",
        "engagementCount": 1825
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-06T23:00:00.000Z",
        "engagementCount": 1979
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-06T23:00:00.000Z",
        "engagementCount": 1354
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-07T23:00:00.000Z",
        "engagementCount": 949
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-07T23:00:00.000Z",
        "engagementCount": 2474
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-07T23:00:00.000Z",
        "engagementCount": 2048
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-07T23:00:00.000Z",
        "engagementCount": 1391
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-07T23:00:00.000Z",
        "engagementCount": 3154
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-08T23:00:00.000Z",
        "engagementCount": 987
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-08T23:00:00.000Z",
        "engagementCount": 2471
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-08T23:00:00.000Z",
        "engagementCount": 1797
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-08T23:00:00.000Z",
        "engagementCount": 2775
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-08T23:00:00.000Z",
        "engagementCount": 2863
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-09T23:00:00.000Z",
        "engagementCount": 1757
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-09T23:00:00.000Z",
        "engagementCount": 2158
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-09T23:00:00.000Z",
        "engagementCount": 2055
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-09T23:00:00.000Z",
        "engagementCount": 2646
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-09T23:00:00.000Z",
        "engagementCount": 3521
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-10T23:00:00.000Z",
        "engagementCount": 1342
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-10T23:00:00.000Z",
        "engagementCount": 1725
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-10T23:00:00.000Z",
        "engagementCount": 2156
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-10T23:00:00.000Z",
        "engagementCount": 3078
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-10T23:00:00.000Z",
        "engagementCount": 3308
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-11T23:00:00.000Z",
        "engagementCount": 845
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-11T23:00:00.000Z",
        "engagementCount": 2138
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-11T23:00:00.000Z",
        "engagementCount": 1072
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-11T23:00:00.000Z",
        "engagementCount": 1561
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-11T23:00:00.000Z",
        "engagementCount": 3299
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-12T23:00:00.000Z",
        "engagementCount": 1279
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-12T23:00:00.000Z",
        "engagementCount": 2529
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-12T23:00:00.000Z",
        "engagementCount": 1234
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-12T23:00:00.000Z",
        "engagementCount": 1998
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-12T23:00:00.000Z",
        "engagementCount": 3440
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-13T23:00:00.000Z",
        "engagementCount": 1876
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-13T23:00:00.000Z",
        "engagementCount": 2261
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-13T23:00:00.000Z",
        "engagementCount": 2791
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-13T23:00:00.000Z",
        "engagementCount": 2775
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-13T23:00:00.000Z",
        "engagementCount": 3042
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-14T23:00:00.000Z",
        "engagementCount": 1709
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-14T23:00:00.000Z",
        "engagementCount": 1748
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-14T23:00:00.000Z",
        "engagementCount": 1525
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-14T23:00:00.000Z",
        "engagementCount": 1866
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-14T23:00:00.000Z",
        "engagementCount": 1593
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-15T23:00:00.000Z",
        "engagementCount": 1411
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-15T23:00:00.000Z",
        "engagementCount": 2206
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-15T23:00:00.000Z",
        "engagementCount": 2855
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-15T23:00:00.000Z",
        "engagementCount": 2225
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-15T23:00:00.000Z",
        "engagementCount": 1686
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-16T23:00:00.000Z",
        "engagementCount": 1504
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-16T23:00:00.000Z",
        "engagementCount": 1548
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-16T23:00:00.000Z",
        "engagementCount": 1913
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-16T23:00:00.000Z",
        "engagementCount": 3133
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-16T23:00:00.000Z",
        "engagementCount": 1689
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-17T23:00:00.000Z",
        "engagementCount": 2088
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-17T23:00:00.000Z",
        "engagementCount": 1240
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-17T23:00:00.000Z",
        "engagementCount": 2788
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-17T23:00:00.000Z",
        "engagementCount": 2467
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-17T23:00:00.000Z",
        "engagementCount": 3563
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-18T23:00:00.000Z",
        "engagementCount": 1797
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-18T23:00:00.000Z",
        "engagementCount": 2317
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-18T23:00:00.000Z",
        "engagementCount": 1707
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-18T23:00:00.000Z",
        "engagementCount": 2861
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-18T23:00:00.000Z",
        "engagementCount": 3463
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-19T23:00:00.000Z",
        "engagementCount": 1661
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-19T23:00:00.000Z",
        "engagementCount": 1296
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-19T23:00:00.000Z",
        "engagementCount": 2731
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-19T23:00:00.000Z",
        "engagementCount": 2321
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-19T23:00:00.000Z",
        "engagementCount": 1324
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-20T23:00:00.000Z",
        "engagementCount": 1078
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-20T23:00:00.000Z",
        "engagementCount": 1626
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-20T23:00:00.000Z",
        "engagementCount": 2740
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-20T23:00:00.000Z",
        "engagementCount": 1299
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-20T23:00:00.000Z",
        "engagementCount": 2664
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-21T23:00:00.000Z",
        "engagementCount": 2138
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-21T23:00:00.000Z",
        "engagementCount": 1103
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-21T23:00:00.000Z",
        "engagementCount": 1900
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-21T23:00:00.000Z",
        "engagementCount": 2987
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-21T23:00:00.000Z",
        "engagementCount": 2649
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-22T23:00:00.000Z",
        "engagementCount": 845
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-22T23:00:00.000Z",
        "engagementCount": 948
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-22T23:00:00.000Z",
        "engagementCount": 2820
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-22T23:00:00.000Z",
        "engagementCount": 2651
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-22T23:00:00.000Z",
        "engagementCount": 2881
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-23T23:00:00.000Z",
        "engagementCount": 2096
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-23T23:00:00.000Z",
        "engagementCount": 1590
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-23T23:00:00.000Z",
        "engagementCount": 2222
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-23T23:00:00.000Z",
        "engagementCount": 1483
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-23T23:00:00.000Z",
        "engagementCount": 2726
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-24T23:00:00.000Z",
        "engagementCount": 2041
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-24T23:00:00.000Z",
        "engagementCount": 1406
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-24T23:00:00.000Z",
        "engagementCount": 2101
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-24T23:00:00.000Z",
        "engagementCount": 1163
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-24T23:00:00.000Z",
        "engagementCount": 2762
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-25T23:00:00.000Z",
        "engagementCount": 1274
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-25T23:00:00.000Z",
        "engagementCount": 2043
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-25T23:00:00.000Z",
        "engagementCount": 2965
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-25T23:00:00.000Z",
        "engagementCount": 1308
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-25T23:00:00.000Z",
        "engagementCount": 2005
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-26T23:00:00.000Z",
        "engagementCount": 1416
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-26T23:00:00.000Z",
        "engagementCount": 2115
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-26T23:00:00.000Z",
        "engagementCount": 1800
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-26T23:00:00.000Z",
        "engagementCount": 2481
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-26T23:00:00.000Z",
        "engagementCount": 1188
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-27T23:00:00.000Z",
        "engagementCount": 2260
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-27T23:00:00.000Z",
        "engagementCount": 1701
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-27T23:00:00.000Z",
        "engagementCount": 2938
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-27T23:00:00.000Z",
        "engagementCount": 2534
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-27T23:00:00.000Z",
        "engagementCount": 2154
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-28T23:00:00.000Z",
        "engagementCount": 1429
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-28T23:00:00.000Z",
        "engagementCount": 1343
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-28T23:00:00.000Z",
        "engagementCount": 1616
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-28T23:00:00.000Z",
        "engagementCount": 1630
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-28T23:00:00.000Z",
        "engagementCount": 1533
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-29T23:00:00.000Z",
        "engagementCount": 2327
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-29T23:00:00.000Z",
        "engagementCount": 1924
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-29T23:00:00.000Z",
        "engagementCount": 1152
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-29T23:00:00.000Z",
        "engagementCount": 1907
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-29T23:00:00.000Z",
        "engagementCount": 2976
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-05-31T23:00:00.000Z",
        "engagementCount": 1681
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-05-31T23:00:00.000Z",
        "engagementCount": 1098
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-05-31T23:00:00.000Z",
        "engagementCount": 2688
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-05-31T23:00:00.000Z",
        "engagementCount": 1584
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-05-31T23:00:00.000Z",
        "engagementCount": 3737
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-01T23:00:00.000Z",
        "engagementCount": 1182
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-01T23:00:00.000Z",
        "engagementCount": 2289
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-01T23:00:00.000Z",
        "engagementCount": 1613
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-01T23:00:00.000Z",
        "engagementCount": 1831
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-01T23:00:00.000Z",
        "engagementCount": 2768
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-02T23:00:00.000Z",
        "engagementCount": 1717
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-02T23:00:00.000Z",
        "engagementCount": 2249
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-02T23:00:00.000Z",
        "engagementCount": 2408
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-02T23:00:00.000Z",
        "engagementCount": 2164
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-02T23:00:00.000Z",
        "engagementCount": 1305
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-03T23:00:00.000Z",
        "engagementCount": 1541
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-03T23:00:00.000Z",
        "engagementCount": 2134
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-03T23:00:00.000Z",
        "engagementCount": 2232
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-03T23:00:00.000Z",
        "engagementCount": 2997
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-03T23:00:00.000Z",
        "engagementCount": 1753
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-04T23:00:00.000Z",
        "engagementCount": 1784
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-04T23:00:00.000Z",
        "engagementCount": 2543
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-04T23:00:00.000Z",
        "engagementCount": 2367
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-04T23:00:00.000Z",
        "engagementCount": 3285
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-04T23:00:00.000Z",
        "engagementCount": 2414
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-05T23:00:00.000Z",
        "engagementCount": 1676
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-05T23:00:00.000Z",
        "engagementCount": 1972
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-05T23:00:00.000Z",
        "engagementCount": 1861
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-05T23:00:00.000Z",
        "engagementCount": 1405
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-05T23:00:00.000Z",
        "engagementCount": 2219
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-06T23:00:00.000Z",
        "engagementCount": 1882
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-06T23:00:00.000Z",
        "engagementCount": 1758
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-06T23:00:00.000Z",
        "engagementCount": 3203
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-06T23:00:00.000Z",
        "engagementCount": 1812
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-06T23:00:00.000Z",
        "engagementCount": 3700
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-07T23:00:00.000Z",
        "engagementCount": 1723
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-07T23:00:00.000Z",
        "engagementCount": 1595
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-07T23:00:00.000Z",
        "engagementCount": 1688
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-07T23:00:00.000Z",
        "engagementCount": 3469
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-07T23:00:00.000Z",
        "engagementCount": 2077
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-08T23:00:00.000Z",
        "engagementCount": 1304
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-08T23:00:00.000Z",
        "engagementCount": 2451
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-08T23:00:00.000Z",
        "engagementCount": 2816
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-08T23:00:00.000Z",
        "engagementCount": 1779
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-08T23:00:00.000Z",
        "engagementCount": 2095
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-09T23:00:00.000Z",
        "engagementCount": 2221
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-09T23:00:00.000Z",
        "engagementCount": 2701
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-09T23:00:00.000Z",
        "engagementCount": 2106
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-09T23:00:00.000Z",
        "engagementCount": 3477
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-09T23:00:00.000Z",
        "engagementCount": 1762
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-10T23:00:00.000Z",
        "engagementCount": 924
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-10T23:00:00.000Z",
        "engagementCount": 2767
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-10T23:00:00.000Z",
        "engagementCount": 2884
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-10T23:00:00.000Z",
        "engagementCount": 2356
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-10T23:00:00.000Z",
        "engagementCount": 2492
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-11T23:00:00.000Z",
        "engagementCount": 1156
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-11T23:00:00.000Z",
        "engagementCount": 1875
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-11T23:00:00.000Z",
        "engagementCount": 1802
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-11T23:00:00.000Z",
        "engagementCount": 1567
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-11T23:00:00.000Z",
        "engagementCount": 3524
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-12T23:00:00.000Z",
        "engagementCount": 2038
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-12T23:00:00.000Z",
        "engagementCount": 1580
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-12T23:00:00.000Z",
        "engagementCount": 2654
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-12T23:00:00.000Z",
        "engagementCount": 2326
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-12T23:00:00.000Z",
        "engagementCount": 3102
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-13T23:00:00.000Z",
        "engagementCount": 1168
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-13T23:00:00.000Z",
        "engagementCount": 2515
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-13T23:00:00.000Z",
        "engagementCount": 2915
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-13T23:00:00.000Z",
        "engagementCount": 2326
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-13T23:00:00.000Z",
        "engagementCount": 1549
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-14T23:00:00.000Z",
        "engagementCount": 1638
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-14T23:00:00.000Z",
        "engagementCount": 1351
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-14T23:00:00.000Z",
        "engagementCount": 1982
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-14T23:00:00.000Z",
        "engagementCount": 2834
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-14T23:00:00.000Z",
        "engagementCount": 1880
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-15T23:00:00.000Z",
        "engagementCount": 1837
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-15T23:00:00.000Z",
        "engagementCount": 2747
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-15T23:00:00.000Z",
        "engagementCount": 1786
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-15T23:00:00.000Z",
        "engagementCount": 2393
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-15T23:00:00.000Z",
        "engagementCount": 1617
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-16T23:00:00.000Z",
        "engagementCount": 2234
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-16T23:00:00.000Z",
        "engagementCount": 2086
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-16T23:00:00.000Z",
        "engagementCount": 1560
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-16T23:00:00.000Z",
        "engagementCount": 3138
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-16T23:00:00.000Z",
        "engagementCount": 3629
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-17T23:00:00.000Z",
        "engagementCount": 882
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-17T23:00:00.000Z",
        "engagementCount": 1737
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-17T23:00:00.000Z",
        "engagementCount": 1418
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-17T23:00:00.000Z",
        "engagementCount": 1212
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-17T23:00:00.000Z",
        "engagementCount": 2593
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-18T23:00:00.000Z",
        "engagementCount": 1125
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-18T23:00:00.000Z",
        "engagementCount": 2732
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-18T23:00:00.000Z",
        "engagementCount": 1739
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-18T23:00:00.000Z",
        "engagementCount": 2025
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-18T23:00:00.000Z",
        "engagementCount": 3689
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-19T23:00:00.000Z",
        "engagementCount": 1827
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-19T23:00:00.000Z",
        "engagementCount": 2289
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-19T23:00:00.000Z",
        "engagementCount": 1318
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-19T23:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-19T23:00:00.000Z",
        "engagementCount": 1426
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-20T23:00:00.000Z",
        "engagementCount": 2079
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-20T23:00:00.000Z",
        "engagementCount": 1973
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-20T23:00:00.000Z",
        "engagementCount": 2601
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-20T23:00:00.000Z",
        "engagementCount": 1431
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-20T23:00:00.000Z",
        "engagementCount": 2465
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-21T23:00:00.000Z",
        "engagementCount": 1337
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-21T23:00:00.000Z",
        "engagementCount": 1997
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-21T23:00:00.000Z",
        "engagementCount": 3070
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-21T23:00:00.000Z",
        "engagementCount": 2668
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-21T23:00:00.000Z",
        "engagementCount": 2107
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-22T23:00:00.000Z",
        "engagementCount": 1053
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-22T23:00:00.000Z",
        "engagementCount": 1109
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-22T23:00:00.000Z",
        "engagementCount": 1167
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-22T23:00:00.000Z",
        "engagementCount": 3504
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-22T23:00:00.000Z",
        "engagementCount": 3266
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-23T23:00:00.000Z",
        "engagementCount": 2462
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-23T23:00:00.000Z",
        "engagementCount": 2081
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-23T23:00:00.000Z",
        "engagementCount": 1901
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-23T23:00:00.000Z",
        "engagementCount": 1286
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-23T23:00:00.000Z",
        "engagementCount": 1845
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-24T23:00:00.000Z",
        "engagementCount": 2404
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-24T23:00:00.000Z",
        "engagementCount": 1072
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-24T23:00:00.000Z",
        "engagementCount": 1727
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-24T23:00:00.000Z",
        "engagementCount": 1522
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-24T23:00:00.000Z",
        "engagementCount": 2673
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-25T23:00:00.000Z",
        "engagementCount": 1348
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-25T23:00:00.000Z",
        "engagementCount": 2624
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-25T23:00:00.000Z",
        "engagementCount": 2276
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-25T23:00:00.000Z",
        "engagementCount": 1903
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-25T23:00:00.000Z",
        "engagementCount": 1489
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-26T23:00:00.000Z",
        "engagementCount": 1685
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-26T23:00:00.000Z",
        "engagementCount": 1212
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-26T23:00:00.000Z",
        "engagementCount": 3044
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-26T23:00:00.000Z",
        "engagementCount": 3115
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-26T23:00:00.000Z",
        "engagementCount": 2053
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-27T23:00:00.000Z",
        "engagementCount": 2271
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-27T23:00:00.000Z",
        "engagementCount": 2270
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-27T23:00:00.000Z",
        "engagementCount": 2884
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-27T23:00:00.000Z",
        "engagementCount": 3267
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-27T23:00:00.000Z",
        "engagementCount": 3794
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-28T23:00:00.000Z",
        "engagementCount": 1196
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-28T23:00:00.000Z",
        "engagementCount": 1385
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-28T23:00:00.000Z",
        "engagementCount": 3090
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-28T23:00:00.000Z",
        "engagementCount": 1874
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-28T23:00:00.000Z",
        "engagementCount": 3534
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-29T23:00:00.000Z",
        "engagementCount": 1351
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-29T23:00:00.000Z",
        "engagementCount": 2621
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-29T23:00:00.000Z",
        "engagementCount": 1103
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-29T23:00:00.000Z",
        "engagementCount": 1790
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-29T23:00:00.000Z",
        "engagementCount": 1524
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 1266
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 1858
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 2338
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 2478
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 2858
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 2791
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 1512
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 2530
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 1922
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-06-30T23:00:00.000Z",
        "engagementCount": 2496
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-01T23:00:00.000Z",
        "engagementCount": 1198
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-01T23:00:00.000Z",
        "engagementCount": 2590
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-01T23:00:00.000Z",
        "engagementCount": 1394
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-01T23:00:00.000Z",
        "engagementCount": 1312
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-01T23:00:00.000Z",
        "engagementCount": 2991
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-02T23:00:00.000Z",
        "engagementCount": 1519
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-02T23:00:00.000Z",
        "engagementCount": 2970
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-02T23:00:00.000Z",
        "engagementCount": 3131
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-02T23:00:00.000Z",
        "engagementCount": 2346
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-02T23:00:00.000Z",
        "engagementCount": 3997
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-03T23:00:00.000Z",
        "engagementCount": 2601
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-03T23:00:00.000Z",
        "engagementCount": 2584
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-03T23:00:00.000Z",
        "engagementCount": 3350
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-03T23:00:00.000Z",
        "engagementCount": 2928
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-03T23:00:00.000Z",
        "engagementCount": 3936
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-04T23:00:00.000Z",
        "engagementCount": 1034
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-04T23:00:00.000Z",
        "engagementCount": 2382
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-04T23:00:00.000Z",
        "engagementCount": 1588
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-04T23:00:00.000Z",
        "engagementCount": 1332
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-04T23:00:00.000Z",
        "engagementCount": 1453
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-05T23:00:00.000Z",
        "engagementCount": 1333
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-05T23:00:00.000Z",
        "engagementCount": 3121
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-05T23:00:00.000Z",
        "engagementCount": 2906
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-05T23:00:00.000Z",
        "engagementCount": 1367
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-05T23:00:00.000Z",
        "engagementCount": 1465
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-06T23:00:00.000Z",
        "engagementCount": 1140
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-06T23:00:00.000Z",
        "engagementCount": 2520
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-06T23:00:00.000Z",
        "engagementCount": 3447
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-06T23:00:00.000Z",
        "engagementCount": 1690
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-06T23:00:00.000Z",
        "engagementCount": 2038
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-07T23:00:00.000Z",
        "engagementCount": 1892
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-07T23:00:00.000Z",
        "engagementCount": 2676
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-07T23:00:00.000Z",
        "engagementCount": 1855
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-07T23:00:00.000Z",
        "engagementCount": 2524
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-07T23:00:00.000Z",
        "engagementCount": 3042
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-08T23:00:00.000Z",
        "engagementCount": 2650
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-08T23:00:00.000Z",
        "engagementCount": 1974
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-08T23:00:00.000Z",
        "engagementCount": 2766
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-08T23:00:00.000Z",
        "engagementCount": 2140
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-08T23:00:00.000Z",
        "engagementCount": 3502
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-09T23:00:00.000Z",
        "engagementCount": 1325
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-09T23:00:00.000Z",
        "engagementCount": 1386
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-09T23:00:00.000Z",
        "engagementCount": 2623
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-09T23:00:00.000Z",
        "engagementCount": 1888
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-09T23:00:00.000Z",
        "engagementCount": 1436
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-10T23:00:00.000Z",
        "engagementCount": 1743
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-10T23:00:00.000Z",
        "engagementCount": 1370
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-10T23:00:00.000Z",
        "engagementCount": 2490
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-10T23:00:00.000Z",
        "engagementCount": 3159
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-10T23:00:00.000Z",
        "engagementCount": 2881
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-11T23:00:00.000Z",
        "engagementCount": 1805
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-11T23:00:00.000Z",
        "engagementCount": 3004
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-11T23:00:00.000Z",
        "engagementCount": 3506
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-11T23:00:00.000Z",
        "engagementCount": 3859
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-11T23:00:00.000Z",
        "engagementCount": 3250
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-12T23:00:00.000Z",
        "engagementCount": 1054
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-12T23:00:00.000Z",
        "engagementCount": 1215
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-12T23:00:00.000Z",
        "engagementCount": 2419
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-12T23:00:00.000Z",
        "engagementCount": 3771
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-12T23:00:00.000Z",
        "engagementCount": 1482
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-13T23:00:00.000Z",
        "engagementCount": 971
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-13T23:00:00.000Z",
        "engagementCount": 1334
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-13T23:00:00.000Z",
        "engagementCount": 3038
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-13T23:00:00.000Z",
        "engagementCount": 2041
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-13T23:00:00.000Z",
        "engagementCount": 2413
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-14T23:00:00.000Z",
        "engagementCount": 1986
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-14T23:00:00.000Z",
        "engagementCount": 2007
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-14T23:00:00.000Z",
        "engagementCount": 1839
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-14T23:00:00.000Z",
        "engagementCount": 1516
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-14T23:00:00.000Z",
        "engagementCount": 1576
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-15T23:00:00.000Z",
        "engagementCount": 1117
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-15T23:00:00.000Z",
        "engagementCount": 1388
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-15T23:00:00.000Z",
        "engagementCount": 1967
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-15T23:00:00.000Z",
        "engagementCount": 1435
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-15T23:00:00.000Z",
        "engagementCount": 2164
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-16T23:00:00.000Z",
        "engagementCount": 2152
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-16T23:00:00.000Z",
        "engagementCount": 1680
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-16T23:00:00.000Z",
        "engagementCount": 2625
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-16T23:00:00.000Z",
        "engagementCount": 1455
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-16T23:00:00.000Z",
        "engagementCount": 1987
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-17T23:00:00.000Z",
        "engagementCount": 1634
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-17T23:00:00.000Z",
        "engagementCount": 1098
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-17T23:00:00.000Z",
        "engagementCount": 1777
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-17T23:00:00.000Z",
        "engagementCount": 1703
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-17T23:00:00.000Z",
        "engagementCount": 3834
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-18T23:00:00.000Z",
        "engagementCount": 1759
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-18T23:00:00.000Z",
        "engagementCount": 1975
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-18T23:00:00.000Z",
        "engagementCount": 3093
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-18T23:00:00.000Z",
        "engagementCount": 3188
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-18T23:00:00.000Z",
        "engagementCount": 2992
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-19T23:00:00.000Z",
        "engagementCount": 1276
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-19T23:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-19T23:00:00.000Z",
        "engagementCount": 1318
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-19T23:00:00.000Z",
        "engagementCount": 1288
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-19T23:00:00.000Z",
        "engagementCount": 2840
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-20T23:00:00.000Z",
        "engagementCount": 2176
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-20T23:00:00.000Z",
        "engagementCount": 1824
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-20T23:00:00.000Z",
        "engagementCount": 3294
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-20T23:00:00.000Z",
        "engagementCount": 1814
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-20T23:00:00.000Z",
        "engagementCount": 2782
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-21T23:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-21T23:00:00.000Z",
        "engagementCount": 1225
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-21T23:00:00.000Z",
        "engagementCount": 1282
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-21T23:00:00.000Z",
        "engagementCount": 2965
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-21T23:00:00.000Z",
        "engagementCount": 3637
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-22T23:00:00.000Z",
        "engagementCount": 2125
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-22T23:00:00.000Z",
        "engagementCount": 1066
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-22T23:00:00.000Z",
        "engagementCount": 1375
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-22T23:00:00.000Z",
        "engagementCount": 2341
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-22T23:00:00.000Z",
        "engagementCount": 1913
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-23T23:00:00.000Z",
        "engagementCount": 1438
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-23T23:00:00.000Z",
        "engagementCount": 1645
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-23T23:00:00.000Z",
        "engagementCount": 2240
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-23T23:00:00.000Z",
        "engagementCount": 3442
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-23T23:00:00.000Z",
        "engagementCount": 2383
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-24T23:00:00.000Z",
        "engagementCount": 2421
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-24T23:00:00.000Z",
        "engagementCount": 2790
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-24T23:00:00.000Z",
        "engagementCount": 2992
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-24T23:00:00.000Z",
        "engagementCount": 3101
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-24T23:00:00.000Z",
        "engagementCount": 3525
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-25T23:00:00.000Z",
        "engagementCount": 1598
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-25T23:00:00.000Z",
        "engagementCount": 1915
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-25T23:00:00.000Z",
        "engagementCount": 2854
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-25T23:00:00.000Z",
        "engagementCount": 2059
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-25T23:00:00.000Z",
        "engagementCount": 2260
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-26T23:00:00.000Z",
        "engagementCount": 2282
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-26T23:00:00.000Z",
        "engagementCount": 1263
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-26T23:00:00.000Z",
        "engagementCount": 3146
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-26T23:00:00.000Z",
        "engagementCount": 2896
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-26T23:00:00.000Z",
        "engagementCount": 4006
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-27T23:00:00.000Z",
        "engagementCount": 2445
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-27T23:00:00.000Z",
        "engagementCount": 1584
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-27T23:00:00.000Z",
        "engagementCount": 2145
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-27T23:00:00.000Z",
        "engagementCount": 3409
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-27T23:00:00.000Z",
        "engagementCount": 4180
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-28T23:00:00.000Z",
        "engagementCount": 2725
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-28T23:00:00.000Z",
        "engagementCount": 3004
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-28T23:00:00.000Z",
        "engagementCount": 1520
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-28T23:00:00.000Z",
        "engagementCount": 1990
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-28T23:00:00.000Z",
        "engagementCount": 3755
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-29T23:00:00.000Z",
        "engagementCount": 1373
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-29T23:00:00.000Z",
        "engagementCount": 2472
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-29T23:00:00.000Z",
        "engagementCount": 3414
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-29T23:00:00.000Z",
        "engagementCount": 3335
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-29T23:00:00.000Z",
        "engagementCount": 2733
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-07-31T23:00:00.000Z",
        "engagementCount": 1319
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-07-31T23:00:00.000Z",
        "engagementCount": 2276
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-07-31T23:00:00.000Z",
        "engagementCount": 3010
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-07-31T23:00:00.000Z",
        "engagementCount": 2537
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-07-31T23:00:00.000Z",
        "engagementCount": 1771
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-01T23:00:00.000Z",
        "engagementCount": 2288
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-01T23:00:00.000Z",
        "engagementCount": 2824
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-01T23:00:00.000Z",
        "engagementCount": 2788
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-01T23:00:00.000Z",
        "engagementCount": 2050
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-01T23:00:00.000Z",
        "engagementCount": 1724
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-02T23:00:00.000Z",
        "engagementCount": 2169
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-02T23:00:00.000Z",
        "engagementCount": 1514
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-02T23:00:00.000Z",
        "engagementCount": 1533
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-02T23:00:00.000Z",
        "engagementCount": 1574
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-02T23:00:00.000Z",
        "engagementCount": 2954
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-03T23:00:00.000Z",
        "engagementCount": 977
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-03T23:00:00.000Z",
        "engagementCount": 2569
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-03T23:00:00.000Z",
        "engagementCount": 1324
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-03T23:00:00.000Z",
        "engagementCount": 2264
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-03T23:00:00.000Z",
        "engagementCount": 3585
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-04T23:00:00.000Z",
        "engagementCount": 2384
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-04T23:00:00.000Z",
        "engagementCount": 1517
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-04T23:00:00.000Z",
        "engagementCount": 1530
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-04T23:00:00.000Z",
        "engagementCount": 2423
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-04T23:00:00.000Z",
        "engagementCount": 1315
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-05T23:00:00.000Z",
        "engagementCount": 2029
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-05T23:00:00.000Z",
        "engagementCount": 1937
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-05T23:00:00.000Z",
        "engagementCount": 2704
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-05T23:00:00.000Z",
        "engagementCount": 2160
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-05T23:00:00.000Z",
        "engagementCount": 2988
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-06T23:00:00.000Z",
        "engagementCount": 2404
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-06T23:00:00.000Z",
        "engagementCount": 1633
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-06T23:00:00.000Z",
        "engagementCount": 1650
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-06T23:00:00.000Z",
        "engagementCount": 2729
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-06T23:00:00.000Z",
        "engagementCount": 2446
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-07T23:00:00.000Z",
        "engagementCount": 1978
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-07T23:00:00.000Z",
        "engagementCount": 1617
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-07T23:00:00.000Z",
        "engagementCount": 2397
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-07T23:00:00.000Z",
        "engagementCount": 2550
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-07T23:00:00.000Z",
        "engagementCount": 1764
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-08T23:00:00.000Z",
        "engagementCount": 1507
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-08T23:00:00.000Z",
        "engagementCount": 2773
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-08T23:00:00.000Z",
        "engagementCount": 1736
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-08T23:00:00.000Z",
        "engagementCount": 2786
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-08T23:00:00.000Z",
        "engagementCount": 3827
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-09T23:00:00.000Z",
        "engagementCount": 2081
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-09T23:00:00.000Z",
        "engagementCount": 1036
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-09T23:00:00.000Z",
        "engagementCount": 2663
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-09T23:00:00.000Z",
        "engagementCount": 1762
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-09T23:00:00.000Z",
        "engagementCount": 3783
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-10T23:00:00.000Z",
        "engagementCount": 887
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-10T23:00:00.000Z",
        "engagementCount": 1596
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-10T23:00:00.000Z",
        "engagementCount": 1844
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-10T23:00:00.000Z",
        "engagementCount": 2757
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-10T23:00:00.000Z",
        "engagementCount": 1673
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-11T23:00:00.000Z",
        "engagementCount": 1299
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-11T23:00:00.000Z",
        "engagementCount": 1604
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-11T23:00:00.000Z",
        "engagementCount": 2956
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-11T23:00:00.000Z",
        "engagementCount": 2091
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-11T23:00:00.000Z",
        "engagementCount": 3411
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-12T23:00:00.000Z",
        "engagementCount": 1719
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-12T23:00:00.000Z",
        "engagementCount": 1099
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-12T23:00:00.000Z",
        "engagementCount": 2043
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-12T23:00:00.000Z",
        "engagementCount": 1771
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-12T23:00:00.000Z",
        "engagementCount": 2067
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-13T23:00:00.000Z",
        "engagementCount": 1114
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-13T23:00:00.000Z",
        "engagementCount": 2684
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-13T23:00:00.000Z",
        "engagementCount": 3087
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-13T23:00:00.000Z",
        "engagementCount": 2537
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-13T23:00:00.000Z",
        "engagementCount": 2506
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-14T23:00:00.000Z",
        "engagementCount": 2239
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-14T23:00:00.000Z",
        "engagementCount": 1146
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-14T23:00:00.000Z",
        "engagementCount": 1257
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-14T23:00:00.000Z",
        "engagementCount": 3169
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-14T23:00:00.000Z",
        "engagementCount": 3449
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-15T23:00:00.000Z",
        "engagementCount": 908
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-15T23:00:00.000Z",
        "engagementCount": 1555
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-15T23:00:00.000Z",
        "engagementCount": 3184
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-15T23:00:00.000Z",
        "engagementCount": 2279
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-15T23:00:00.000Z",
        "engagementCount": 1479
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-16T23:00:00.000Z",
        "engagementCount": 1896
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-16T23:00:00.000Z",
        "engagementCount": 2613
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-16T23:00:00.000Z",
        "engagementCount": 1882
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-16T23:00:00.000Z",
        "engagementCount": 2719
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-16T23:00:00.000Z",
        "engagementCount": 1336
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-17T23:00:00.000Z",
        "engagementCount": 2240
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-17T23:00:00.000Z",
        "engagementCount": 1463
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-17T23:00:00.000Z",
        "engagementCount": 3049
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-17T23:00:00.000Z",
        "engagementCount": 2864
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-17T23:00:00.000Z",
        "engagementCount": 3358
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-18T23:00:00.000Z",
        "engagementCount": 2118
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-18T23:00:00.000Z",
        "engagementCount": 2682
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-18T23:00:00.000Z",
        "engagementCount": 2134
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-18T23:00:00.000Z",
        "engagementCount": 1553
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-18T23:00:00.000Z",
        "engagementCount": 3160
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-19T23:00:00.000Z",
        "engagementCount": 1635
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-19T23:00:00.000Z",
        "engagementCount": 2059
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-19T23:00:00.000Z",
        "engagementCount": 2073
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-19T23:00:00.000Z",
        "engagementCount": 1535
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-19T23:00:00.000Z",
        "engagementCount": 1311
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-20T23:00:00.000Z",
        "engagementCount": 2473
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-20T23:00:00.000Z",
        "engagementCount": 2199
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-20T23:00:00.000Z",
        "engagementCount": 1476
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-20T23:00:00.000Z",
        "engagementCount": 2418
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-20T23:00:00.000Z",
        "engagementCount": 1754
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-21T23:00:00.000Z",
        "engagementCount": 1841
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-21T23:00:00.000Z",
        "engagementCount": 2526
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-21T23:00:00.000Z",
        "engagementCount": 2484
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-21T23:00:00.000Z",
        "engagementCount": 2804
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-21T23:00:00.000Z",
        "engagementCount": 1500
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-22T23:00:00.000Z",
        "engagementCount": 1351
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-22T23:00:00.000Z",
        "engagementCount": 1017
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-22T23:00:00.000Z",
        "engagementCount": 1158
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-22T23:00:00.000Z",
        "engagementCount": 3202
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-22T23:00:00.000Z",
        "engagementCount": 2967
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-23T23:00:00.000Z",
        "engagementCount": 1550
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-23T23:00:00.000Z",
        "engagementCount": 1845
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-23T23:00:00.000Z",
        "engagementCount": 2211
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-23T23:00:00.000Z",
        "engagementCount": 1646
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-23T23:00:00.000Z",
        "engagementCount": 2850
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-24T23:00:00.000Z",
        "engagementCount": 2446
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-24T23:00:00.000Z",
        "engagementCount": 2392
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-24T23:00:00.000Z",
        "engagementCount": 2221
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-24T23:00:00.000Z",
        "engagementCount": 1791
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-24T23:00:00.000Z",
        "engagementCount": 1300
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-25T23:00:00.000Z",
        "engagementCount": 2092
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-25T23:00:00.000Z",
        "engagementCount": 1421
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-25T23:00:00.000Z",
        "engagementCount": 2711
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-25T23:00:00.000Z",
        "engagementCount": 2888
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-25T23:00:00.000Z",
        "engagementCount": 1756
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-26T23:00:00.000Z",
        "engagementCount": 1253
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-26T23:00:00.000Z",
        "engagementCount": 1486
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-26T23:00:00.000Z",
        "engagementCount": 1415
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-26T23:00:00.000Z",
        "engagementCount": 2554
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-26T23:00:00.000Z",
        "engagementCount": 3206
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-27T23:00:00.000Z",
        "engagementCount": 1243
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-27T23:00:00.000Z",
        "engagementCount": 1856
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-27T23:00:00.000Z",
        "engagementCount": 3152
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-27T23:00:00.000Z",
        "engagementCount": 2392
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-27T23:00:00.000Z",
        "engagementCount": 1759
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-28T23:00:00.000Z",
        "engagementCount": 2478
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-28T23:00:00.000Z",
        "engagementCount": 1286
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-28T23:00:00.000Z",
        "engagementCount": 1745
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-28T23:00:00.000Z",
        "engagementCount": 2168
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-28T23:00:00.000Z",
        "engagementCount": 2437
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-29T23:00:00.000Z",
        "engagementCount": 1148
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-29T23:00:00.000Z",
        "engagementCount": 2539
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-29T23:00:00.000Z",
        "engagementCount": 1813
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-29T23:00:00.000Z",
        "engagementCount": 3366
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-29T23:00:00.000Z",
        "engagementCount": 1756
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-30T23:00:00.000Z",
        "engagementCount": 1160
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-30T23:00:00.000Z",
        "engagementCount": 2241
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-30T23:00:00.000Z",
        "engagementCount": 1920
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-30T23:00:00.000Z",
        "engagementCount": 1877
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-30T23:00:00.000Z",
        "engagementCount": 3140
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-08-31T23:00:00.000Z",
        "engagementCount": 2027
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-08-31T23:00:00.000Z",
        "engagementCount": 1332
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-08-31T23:00:00.000Z",
        "engagementCount": 1117
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-08-31T23:00:00.000Z",
        "engagementCount": 3179
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-08-31T23:00:00.000Z",
        "engagementCount": 3426
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-01T23:00:00.000Z",
        "engagementCount": 916
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-01T23:00:00.000Z",
        "engagementCount": 925
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-01T23:00:00.000Z",
        "engagementCount": 2703
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-01T23:00:00.000Z",
        "engagementCount": 1089
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-01T23:00:00.000Z",
        "engagementCount": 1828
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-02T23:00:00.000Z",
        "engagementCount": 1907
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-02T23:00:00.000Z",
        "engagementCount": 1105
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-02T23:00:00.000Z",
        "engagementCount": 1517
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-02T23:00:00.000Z",
        "engagementCount": 2750
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-02T23:00:00.000Z",
        "engagementCount": 2396
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-03T23:00:00.000Z",
        "engagementCount": 2211
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-03T23:00:00.000Z",
        "engagementCount": 1269
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-03T23:00:00.000Z",
        "engagementCount": 1212
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-03T23:00:00.000Z",
        "engagementCount": 2041
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-03T23:00:00.000Z",
        "engagementCount": 3396
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-04T23:00:00.000Z",
        "engagementCount": 2102
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-04T23:00:00.000Z",
        "engagementCount": 1576
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-04T23:00:00.000Z",
        "engagementCount": 1622
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-04T23:00:00.000Z",
        "engagementCount": 2325
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-04T23:00:00.000Z",
        "engagementCount": 1727
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-05T23:00:00.000Z",
        "engagementCount": 1084
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-05T23:00:00.000Z",
        "engagementCount": 2510
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-05T23:00:00.000Z",
        "engagementCount": 2349
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-05T23:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-05T23:00:00.000Z",
        "engagementCount": 1670
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-06T23:00:00.000Z",
        "engagementCount": 1775
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-06T23:00:00.000Z",
        "engagementCount": 2187
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-06T23:00:00.000Z",
        "engagementCount": 2837
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-06T23:00:00.000Z",
        "engagementCount": 3137
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-06T23:00:00.000Z",
        "engagementCount": 3371
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-07T23:00:00.000Z",
        "engagementCount": 1364
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-07T23:00:00.000Z",
        "engagementCount": 1531
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-07T23:00:00.000Z",
        "engagementCount": 1722
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-07T23:00:00.000Z",
        "engagementCount": 2764
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-07T23:00:00.000Z",
        "engagementCount": 3304
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-08T23:00:00.000Z",
        "engagementCount": 2288
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-08T23:00:00.000Z",
        "engagementCount": 2073
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-08T23:00:00.000Z",
        "engagementCount": 2743
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-08T23:00:00.000Z",
        "engagementCount": 2018
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-08T23:00:00.000Z",
        "engagementCount": 2293
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-09T23:00:00.000Z",
        "engagementCount": 1943
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-09T23:00:00.000Z",
        "engagementCount": 2168
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-09T23:00:00.000Z",
        "engagementCount": 2584
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-09T23:00:00.000Z",
        "engagementCount": 1451
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-09T23:00:00.000Z",
        "engagementCount": 1765
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-10T23:00:00.000Z",
        "engagementCount": 1529
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-10T23:00:00.000Z",
        "engagementCount": 900
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-10T23:00:00.000Z",
        "engagementCount": 2548
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-10T23:00:00.000Z",
        "engagementCount": 3035
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-10T23:00:00.000Z",
        "engagementCount": 2646
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-11T23:00:00.000Z",
        "engagementCount": 869
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-11T23:00:00.000Z",
        "engagementCount": 2557
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-11T23:00:00.000Z",
        "engagementCount": 1967
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-11T23:00:00.000Z",
        "engagementCount": 1242
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-11T23:00:00.000Z",
        "engagementCount": 2225
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-12T23:00:00.000Z",
        "engagementCount": 1214
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-12T23:00:00.000Z",
        "engagementCount": 2076
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-12T23:00:00.000Z",
        "engagementCount": 2174
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-12T23:00:00.000Z",
        "engagementCount": 2017
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-12T23:00:00.000Z",
        "engagementCount": 1266
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-13T23:00:00.000Z",
        "engagementCount": 1384
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-13T23:00:00.000Z",
        "engagementCount": 1285
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-13T23:00:00.000Z",
        "engagementCount": 2927
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-13T23:00:00.000Z",
        "engagementCount": 1599
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-13T23:00:00.000Z",
        "engagementCount": 1453
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-14T23:00:00.000Z",
        "engagementCount": 1164
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-14T23:00:00.000Z",
        "engagementCount": 1106
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-14T23:00:00.000Z",
        "engagementCount": 2443
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-14T23:00:00.000Z",
        "engagementCount": 2646
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-14T23:00:00.000Z",
        "engagementCount": 2603
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-15T23:00:00.000Z",
        "engagementCount": 1847
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-15T23:00:00.000Z",
        "engagementCount": 1947
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-15T23:00:00.000Z",
        "engagementCount": 1473
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-15T23:00:00.000Z",
        "engagementCount": 1160
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-15T23:00:00.000Z",
        "engagementCount": 1763
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-16T23:00:00.000Z",
        "engagementCount": 992
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-16T23:00:00.000Z",
        "engagementCount": 1384
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-16T23:00:00.000Z",
        "engagementCount": 2497
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-16T23:00:00.000Z",
        "engagementCount": 2921
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-16T23:00:00.000Z",
        "engagementCount": 2805
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-17T23:00:00.000Z",
        "engagementCount": 1636
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-17T23:00:00.000Z",
        "engagementCount": 1363
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-17T23:00:00.000Z",
        "engagementCount": 2828
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-17T23:00:00.000Z",
        "engagementCount": 2960
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-17T23:00:00.000Z",
        "engagementCount": 3170
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-18T23:00:00.000Z",
        "engagementCount": 1112
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-18T23:00:00.000Z",
        "engagementCount": 2414
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-18T23:00:00.000Z",
        "engagementCount": 1329
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-18T23:00:00.000Z",
        "engagementCount": 2665
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-18T23:00:00.000Z",
        "engagementCount": 2084
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-19T23:00:00.000Z",
        "engagementCount": 2097
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-19T23:00:00.000Z",
        "engagementCount": 1759
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-19T23:00:00.000Z",
        "engagementCount": 1868
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-19T23:00:00.000Z",
        "engagementCount": 2544
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-19T23:00:00.000Z",
        "engagementCount": 2965
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-20T23:00:00.000Z",
        "engagementCount": 1669
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-20T23:00:00.000Z",
        "engagementCount": 1775
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-20T23:00:00.000Z",
        "engagementCount": 1722
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-20T23:00:00.000Z",
        "engagementCount": 1523
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-20T23:00:00.000Z",
        "engagementCount": 2422
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-21T23:00:00.000Z",
        "engagementCount": 996
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-21T23:00:00.000Z",
        "engagementCount": 2361
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-21T23:00:00.000Z",
        "engagementCount": 2923
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-21T23:00:00.000Z",
        "engagementCount": 2480
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-21T23:00:00.000Z",
        "engagementCount": 1283
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-22T23:00:00.000Z",
        "engagementCount": 2207
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-22T23:00:00.000Z",
        "engagementCount": 2544
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-22T23:00:00.000Z",
        "engagementCount": 2616
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-22T23:00:00.000Z",
        "engagementCount": 2033
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-22T23:00:00.000Z",
        "engagementCount": 2530
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-23T23:00:00.000Z",
        "engagementCount": 1713
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-23T23:00:00.000Z",
        "engagementCount": 2315
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-23T23:00:00.000Z",
        "engagementCount": 2941
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-23T23:00:00.000Z",
        "engagementCount": 2551
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-23T23:00:00.000Z",
        "engagementCount": 3156
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-24T23:00:00.000Z",
        "engagementCount": 1646
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-24T23:00:00.000Z",
        "engagementCount": 1554
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-24T23:00:00.000Z",
        "engagementCount": 1997
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-24T23:00:00.000Z",
        "engagementCount": 2194
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-24T23:00:00.000Z",
        "engagementCount": 2671
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-25T23:00:00.000Z",
        "engagementCount": 1220
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-25T23:00:00.000Z",
        "engagementCount": 1067
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-25T23:00:00.000Z",
        "engagementCount": 1709
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-25T23:00:00.000Z",
        "engagementCount": 1464
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-25T23:00:00.000Z",
        "engagementCount": 3238
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-26T23:00:00.000Z",
        "engagementCount": 1330
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-26T23:00:00.000Z",
        "engagementCount": 922
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-26T23:00:00.000Z",
        "engagementCount": 2028
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-26T23:00:00.000Z",
        "engagementCount": 2514
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-26T23:00:00.000Z",
        "engagementCount": 2672
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-27T23:00:00.000Z",
        "engagementCount": 1921
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-27T23:00:00.000Z",
        "engagementCount": 2595
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-27T23:00:00.000Z",
        "engagementCount": 2655
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-27T23:00:00.000Z",
        "engagementCount": 1235
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-27T23:00:00.000Z",
        "engagementCount": 1421
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-28T23:00:00.000Z",
        "engagementCount": 1740
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-28T23:00:00.000Z",
        "engagementCount": 1002
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-28T23:00:00.000Z",
        "engagementCount": 2479
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-28T23:00:00.000Z",
        "engagementCount": 1758
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-28T23:00:00.000Z",
        "engagementCount": 3435
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-29T23:00:00.000Z",
        "engagementCount": 922
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-29T23:00:00.000Z",
        "engagementCount": 2374
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-29T23:00:00.000Z",
        "engagementCount": 1571
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-29T23:00:00.000Z",
        "engagementCount": 1872
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-29T23:00:00.000Z",
        "engagementCount": 3366
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 1750
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 2597
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 3097
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 2623
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 1101
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 1431
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 1532
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 1975
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-09-30T23:00:00.000Z",
        "engagementCount": 2211
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-01T23:00:00.000Z",
        "engagementCount": 871
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-01T23:00:00.000Z",
        "engagementCount": 1295
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-01T23:00:00.000Z",
        "engagementCount": 1984
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-01T23:00:00.000Z",
        "engagementCount": 1187
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-01T23:00:00.000Z",
        "engagementCount": 3029
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-02T23:00:00.000Z",
        "engagementCount": 1686
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-02T23:00:00.000Z",
        "engagementCount": 2326
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-02T23:00:00.000Z",
        "engagementCount": 1484
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-02T23:00:00.000Z",
        "engagementCount": 1617
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-02T23:00:00.000Z",
        "engagementCount": 2240
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-03T23:00:00.000Z",
        "engagementCount": 818
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-03T23:00:00.000Z",
        "engagementCount": 2067
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-03T23:00:00.000Z",
        "engagementCount": 2212
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-03T23:00:00.000Z",
        "engagementCount": 2334
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-03T23:00:00.000Z",
        "engagementCount": 2353
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-04T23:00:00.000Z",
        "engagementCount": 1538
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-04T23:00:00.000Z",
        "engagementCount": 1791
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-04T23:00:00.000Z",
        "engagementCount": 1402
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-04T23:00:00.000Z",
        "engagementCount": 1683
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-04T23:00:00.000Z",
        "engagementCount": 1455
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-05T23:00:00.000Z",
        "engagementCount": 1467
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-05T23:00:00.000Z",
        "engagementCount": 1397
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-05T23:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-05T23:00:00.000Z",
        "engagementCount": 2403
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-05T23:00:00.000Z",
        "engagementCount": 2127
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-06T23:00:00.000Z",
        "engagementCount": 1704
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-06T23:00:00.000Z",
        "engagementCount": 2409
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-06T23:00:00.000Z",
        "engagementCount": 1012
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-06T23:00:00.000Z",
        "engagementCount": 1811
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-06T23:00:00.000Z",
        "engagementCount": 2109
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-07T23:00:00.000Z",
        "engagementCount": 1726
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-07T23:00:00.000Z",
        "engagementCount": 1199
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-07T23:00:00.000Z",
        "engagementCount": 1647
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-07T23:00:00.000Z",
        "engagementCount": 1291
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-07T23:00:00.000Z",
        "engagementCount": 2779
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-08T23:00:00.000Z",
        "engagementCount": 1034
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-08T23:00:00.000Z",
        "engagementCount": 1188
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-08T23:00:00.000Z",
        "engagementCount": 2115
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-08T23:00:00.000Z",
        "engagementCount": 1571
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-08T23:00:00.000Z",
        "engagementCount": 2650
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-09T23:00:00.000Z",
        "engagementCount": 1752
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-09T23:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-09T23:00:00.000Z",
        "engagementCount": 928
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-09T23:00:00.000Z",
        "engagementCount": 1539
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-09T23:00:00.000Z",
        "engagementCount": 2309
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-10T23:00:00.000Z",
        "engagementCount": 762
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-10T23:00:00.000Z",
        "engagementCount": 1848
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-10T23:00:00.000Z",
        "engagementCount": 1259
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-10T23:00:00.000Z",
        "engagementCount": 1073
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-10T23:00:00.000Z",
        "engagementCount": 3003
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-11T23:00:00.000Z",
        "engagementCount": 1588
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-11T23:00:00.000Z",
        "engagementCount": 1694
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-11T23:00:00.000Z",
        "engagementCount": 1349
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-11T23:00:00.000Z",
        "engagementCount": 2702
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-11T23:00:00.000Z",
        "engagementCount": 2213
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-12T23:00:00.000Z",
        "engagementCount": 1019
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-12T23:00:00.000Z",
        "engagementCount": 1782
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-12T23:00:00.000Z",
        "engagementCount": 1023
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-12T23:00:00.000Z",
        "engagementCount": 2056
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-12T23:00:00.000Z",
        "engagementCount": 2672
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-13T23:00:00.000Z",
        "engagementCount": 1948
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-13T23:00:00.000Z",
        "engagementCount": 1861
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-13T23:00:00.000Z",
        "engagementCount": 2320
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-13T23:00:00.000Z",
        "engagementCount": 1600
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-13T23:00:00.000Z",
        "engagementCount": 1906
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-14T23:00:00.000Z",
        "engagementCount": 834
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-14T23:00:00.000Z",
        "engagementCount": 2196
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-14T23:00:00.000Z",
        "engagementCount": 2391
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-14T23:00:00.000Z",
        "engagementCount": 2211
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-14T23:00:00.000Z",
        "engagementCount": 2335
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-15T23:00:00.000Z",
        "engagementCount": 1176
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-15T23:00:00.000Z",
        "engagementCount": 822
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-15T23:00:00.000Z",
        "engagementCount": 2394
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-15T23:00:00.000Z",
        "engagementCount": 2548
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-15T23:00:00.000Z",
        "engagementCount": 1955
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-16T23:00:00.000Z",
        "engagementCount": 865
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-16T23:00:00.000Z",
        "engagementCount": 2080
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-16T23:00:00.000Z",
        "engagementCount": 1301
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-16T23:00:00.000Z",
        "engagementCount": 2874
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-16T23:00:00.000Z",
        "engagementCount": 1662
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-17T23:00:00.000Z",
        "engagementCount": 1377
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-17T23:00:00.000Z",
        "engagementCount": 1950
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-17T23:00:00.000Z",
        "engagementCount": 932
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-17T23:00:00.000Z",
        "engagementCount": 2028
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-17T23:00:00.000Z",
        "engagementCount": 3057
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-18T23:00:00.000Z",
        "engagementCount": 1450
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-18T23:00:00.000Z",
        "engagementCount": 1232
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-18T23:00:00.000Z",
        "engagementCount": 2677
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-18T23:00:00.000Z",
        "engagementCount": 2356
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-18T23:00:00.000Z",
        "engagementCount": 2240
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-19T23:00:00.000Z",
        "engagementCount": 1114
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-19T23:00:00.000Z",
        "engagementCount": 2196
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-19T23:00:00.000Z",
        "engagementCount": 2082
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-19T23:00:00.000Z",
        "engagementCount": 1718
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-19T23:00:00.000Z",
        "engagementCount": 2229
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-20T23:00:00.000Z",
        "engagementCount": 837
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-20T23:00:00.000Z",
        "engagementCount": 1317
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-20T23:00:00.000Z",
        "engagementCount": 1315
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-20T23:00:00.000Z",
        "engagementCount": 2717
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-20T23:00:00.000Z",
        "engagementCount": 2423
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-21T23:00:00.000Z",
        "engagementCount": 1519
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-21T23:00:00.000Z",
        "engagementCount": 1272
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-21T23:00:00.000Z",
        "engagementCount": 2365
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-21T23:00:00.000Z",
        "engagementCount": 2845
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-21T23:00:00.000Z",
        "engagementCount": 2029
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-22T23:00:00.000Z",
        "engagementCount": 1520
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-22T23:00:00.000Z",
        "engagementCount": 1862
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-22T23:00:00.000Z",
        "engagementCount": 2317
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-22T23:00:00.000Z",
        "engagementCount": 1126
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-22T23:00:00.000Z",
        "engagementCount": 2290
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-23T23:00:00.000Z",
        "engagementCount": 1918
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-23T23:00:00.000Z",
        "engagementCount": 1372
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-23T23:00:00.000Z",
        "engagementCount": 1770
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-23T23:00:00.000Z",
        "engagementCount": 2576
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-23T23:00:00.000Z",
        "engagementCount": 3234
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-24T23:00:00.000Z",
        "engagementCount": 1931
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-24T23:00:00.000Z",
        "engagementCount": 2422
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-24T23:00:00.000Z",
        "engagementCount": 1189
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-24T23:00:00.000Z",
        "engagementCount": 1121
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-24T23:00:00.000Z",
        "engagementCount": 1555
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-25T23:00:00.000Z",
        "engagementCount": 1540
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-25T23:00:00.000Z",
        "engagementCount": 1322
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-25T23:00:00.000Z",
        "engagementCount": 1002
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-25T23:00:00.000Z",
        "engagementCount": 2081
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-25T23:00:00.000Z",
        "engagementCount": 2078
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-26T23:00:00.000Z",
        "engagementCount": 1004
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-26T23:00:00.000Z",
        "engagementCount": 2264
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-26T23:00:00.000Z",
        "engagementCount": 1672
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-26T23:00:00.000Z",
        "engagementCount": 1557
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-26T23:00:00.000Z",
        "engagementCount": 1496
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-27T23:00:00.000Z",
        "engagementCount": 1893
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-27T23:00:00.000Z",
        "engagementCount": 1754
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-27T23:00:00.000Z",
        "engagementCount": 1580
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-27T23:00:00.000Z",
        "engagementCount": 1613
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-27T23:00:00.000Z",
        "engagementCount": 1676
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-28T23:00:00.000Z",
        "engagementCount": 1386
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-28T23:00:00.000Z",
        "engagementCount": 1173
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-28T23:00:00.000Z",
        "engagementCount": 2343
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-28T23:00:00.000Z",
        "engagementCount": 2027
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-28T23:00:00.000Z",
        "engagementCount": 1500
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-10-29T23:00:00.000Z",
        "engagementCount": 2058
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-10-29T23:00:00.000Z",
        "engagementCount": 1822
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-10-29T23:00:00.000Z",
        "engagementCount": 2202
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-10-29T23:00:00.000Z",
        "engagementCount": 2371
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-10-29T23:00:00.000Z",
        "engagementCount": 1612
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-01T00:00:00.000Z",
        "engagementCount": 766
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-01T00:00:00.000Z",
        "engagementCount": 1690
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-01T00:00:00.000Z",
        "engagementCount": 1803
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-01T00:00:00.000Z",
        "engagementCount": 1875
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-01T00:00:00.000Z",
        "engagementCount": 2283
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-02T00:00:00.000Z",
        "engagementCount": 1602
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-02T00:00:00.000Z",
        "engagementCount": 934
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-02T00:00:00.000Z",
        "engagementCount": 1146
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-02T00:00:00.000Z",
        "engagementCount": 2007
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-02T00:00:00.000Z",
        "engagementCount": 2389
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-03T00:00:00.000Z",
        "engagementCount": 1311
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-03T00:00:00.000Z",
        "engagementCount": 1809
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-03T00:00:00.000Z",
        "engagementCount": 869
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-03T00:00:00.000Z",
        "engagementCount": 2106
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-03T00:00:00.000Z",
        "engagementCount": 1141
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-04T00:00:00.000Z",
        "engagementCount": 844
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-04T00:00:00.000Z",
        "engagementCount": 921
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-04T00:00:00.000Z",
        "engagementCount": 1509
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-04T00:00:00.000Z",
        "engagementCount": 1688
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-04T00:00:00.000Z",
        "engagementCount": 1317
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-05T00:00:00.000Z",
        "engagementCount": 1464
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-05T00:00:00.000Z",
        "engagementCount": 1238
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-05T00:00:00.000Z",
        "engagementCount": 1944
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-05T00:00:00.000Z",
        "engagementCount": 1175
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-05T00:00:00.000Z",
        "engagementCount": 2275
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-06T00:00:00.000Z",
        "engagementCount": 1829
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-06T00:00:00.000Z",
        "engagementCount": 906
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-06T00:00:00.000Z",
        "engagementCount": 1386
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-06T00:00:00.000Z",
        "engagementCount": 1479
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-06T00:00:00.000Z",
        "engagementCount": 2634
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-07T00:00:00.000Z",
        "engagementCount": 671
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-07T00:00:00.000Z",
        "engagementCount": 898
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-07T00:00:00.000Z",
        "engagementCount": 2016
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-07T00:00:00.000Z",
        "engagementCount": 2382
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-07T00:00:00.000Z",
        "engagementCount": 1077
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-08T00:00:00.000Z",
        "engagementCount": 740
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-08T00:00:00.000Z",
        "engagementCount": 2088
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-08T00:00:00.000Z",
        "engagementCount": 1514
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-08T00:00:00.000Z",
        "engagementCount": 1686
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-08T00:00:00.000Z",
        "engagementCount": 1647
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-09T00:00:00.000Z",
        "engagementCount": 1707
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-09T00:00:00.000Z",
        "engagementCount": 1467
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-09T00:00:00.000Z",
        "engagementCount": 2162
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-09T00:00:00.000Z",
        "engagementCount": 2241
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-09T00:00:00.000Z",
        "engagementCount": 1557
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-10T00:00:00.000Z",
        "engagementCount": 1567
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-10T00:00:00.000Z",
        "engagementCount": 797
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-10T00:00:00.000Z",
        "engagementCount": 2311
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-10T00:00:00.000Z",
        "engagementCount": 957
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-10T00:00:00.000Z",
        "engagementCount": 2388
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-11T00:00:00.000Z",
        "engagementCount": 1048
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-11T00:00:00.000Z",
        "engagementCount": 1740
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-11T00:00:00.000Z",
        "engagementCount": 1841
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-11T00:00:00.000Z",
        "engagementCount": 930
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-11T00:00:00.000Z",
        "engagementCount": 2886
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-12T00:00:00.000Z",
        "engagementCount": 1298
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-12T00:00:00.000Z",
        "engagementCount": 869
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-12T00:00:00.000Z",
        "engagementCount": 2407
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-12T00:00:00.000Z",
        "engagementCount": 2034
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-12T00:00:00.000Z",
        "engagementCount": 2061
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-13T00:00:00.000Z",
        "engagementCount": 728
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-13T00:00:00.000Z",
        "engagementCount": 1973
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-13T00:00:00.000Z",
        "engagementCount": 1431
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-13T00:00:00.000Z",
        "engagementCount": 1287
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-13T00:00:00.000Z",
        "engagementCount": 1153
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-14T00:00:00.000Z",
        "engagementCount": 1795
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-14T00:00:00.000Z",
        "engagementCount": 1416
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-14T00:00:00.000Z",
        "engagementCount": 1963
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-14T00:00:00.000Z",
        "engagementCount": 1106
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-14T00:00:00.000Z",
        "engagementCount": 1499
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-15T00:00:00.000Z",
        "engagementCount": 1842
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-15T00:00:00.000Z",
        "engagementCount": 1972
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-15T00:00:00.000Z",
        "engagementCount": 1211
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-15T00:00:00.000Z",
        "engagementCount": 936
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-15T00:00:00.000Z",
        "engagementCount": 2576
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-16T00:00:00.000Z",
        "engagementCount": 1166
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-16T00:00:00.000Z",
        "engagementCount": 762
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-16T00:00:00.000Z",
        "engagementCount": 2052
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-16T00:00:00.000Z",
        "engagementCount": 1498
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-16T00:00:00.000Z",
        "engagementCount": 2572
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-17T00:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-17T00:00:00.000Z",
        "engagementCount": 2002
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-17T00:00:00.000Z",
        "engagementCount": 867
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-17T00:00:00.000Z",
        "engagementCount": 973
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-17T00:00:00.000Z",
        "engagementCount": 2021
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-18T00:00:00.000Z",
        "engagementCount": 716
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-18T00:00:00.000Z",
        "engagementCount": 882
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-18T00:00:00.000Z",
        "engagementCount": 2149
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-18T00:00:00.000Z",
        "engagementCount": 2349
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-18T00:00:00.000Z",
        "engagementCount": 2348
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-19T00:00:00.000Z",
        "engagementCount": 1843
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-19T00:00:00.000Z",
        "engagementCount": 1895
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-19T00:00:00.000Z",
        "engagementCount": 2272
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-19T00:00:00.000Z",
        "engagementCount": 1612
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-19T00:00:00.000Z",
        "engagementCount": 2726
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-20T00:00:00.000Z",
        "engagementCount": 717
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-20T00:00:00.000Z",
        "engagementCount": 2071
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-20T00:00:00.000Z",
        "engagementCount": 1455
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-20T00:00:00.000Z",
        "engagementCount": 1291
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-20T00:00:00.000Z",
        "engagementCount": 1416
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-21T00:00:00.000Z",
        "engagementCount": 912
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-21T00:00:00.000Z",
        "engagementCount": 2054
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-21T00:00:00.000Z",
        "engagementCount": 1244
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-21T00:00:00.000Z",
        "engagementCount": 2363
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-21T00:00:00.000Z",
        "engagementCount": 1078
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-22T00:00:00.000Z",
        "engagementCount": 1050
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-22T00:00:00.000Z",
        "engagementCount": 1456
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-22T00:00:00.000Z",
        "engagementCount": 1389
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-22T00:00:00.000Z",
        "engagementCount": 2581
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-22T00:00:00.000Z",
        "engagementCount": 2484
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-23T00:00:00.000Z",
        "engagementCount": 1322
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-23T00:00:00.000Z",
        "engagementCount": 2168
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-23T00:00:00.000Z",
        "engagementCount": 2376
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-23T00:00:00.000Z",
        "engagementCount": 2583
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-23T00:00:00.000Z",
        "engagementCount": 1201
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-24T00:00:00.000Z",
        "engagementCount": 721
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-24T00:00:00.000Z",
        "engagementCount": 1034
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-24T00:00:00.000Z",
        "engagementCount": 954
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-24T00:00:00.000Z",
        "engagementCount": 2531
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-24T00:00:00.000Z",
        "engagementCount": 2753
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-25T00:00:00.000Z",
        "engagementCount": 775
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-25T00:00:00.000Z",
        "engagementCount": 904
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-25T00:00:00.000Z",
        "engagementCount": 1080
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-25T00:00:00.000Z",
        "engagementCount": 1367
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-25T00:00:00.000Z",
        "engagementCount": 1689
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-26T00:00:00.000Z",
        "engagementCount": 802
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-26T00:00:00.000Z",
        "engagementCount": 1132
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-26T00:00:00.000Z",
        "engagementCount": 1420
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-26T00:00:00.000Z",
        "engagementCount": 2639
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-26T00:00:00.000Z",
        "engagementCount": 2134
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-27T00:00:00.000Z",
        "engagementCount": 1933
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-27T00:00:00.000Z",
        "engagementCount": 1521
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-27T00:00:00.000Z",
        "engagementCount": 1586
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-27T00:00:00.000Z",
        "engagementCount": 2579
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-27T00:00:00.000Z",
        "engagementCount": 1349
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-28T00:00:00.000Z",
        "engagementCount": 1038
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-28T00:00:00.000Z",
        "engagementCount": 1295
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-28T00:00:00.000Z",
        "engagementCount": 2352
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-28T00:00:00.000Z",
        "engagementCount": 1088
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-28T00:00:00.000Z",
        "engagementCount": 1923
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-29T00:00:00.000Z",
        "engagementCount": 1720
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-29T00:00:00.000Z",
        "engagementCount": 961
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-29T00:00:00.000Z",
        "engagementCount": 822
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-29T00:00:00.000Z",
        "engagementCount": 1685
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-29T00:00:00.000Z",
        "engagementCount": 1724
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-11-30T00:00:00.000Z",
        "engagementCount": 1783
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-11-30T00:00:00.000Z",
        "engagementCount": 1066
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-11-30T00:00:00.000Z",
        "engagementCount": 1256
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-11-30T00:00:00.000Z",
        "engagementCount": 1718
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-11-30T00:00:00.000Z",
        "engagementCount": 1750
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1166
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1358
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1443
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1282
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1116
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1175
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1152
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1222
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 1579
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-01T00:00:00.000Z",
        "engagementCount": 991
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-02T00:00:00.000Z",
        "engagementCount": 1140
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-02T00:00:00.000Z",
        "engagementCount": 1620
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-02T00:00:00.000Z",
        "engagementCount": 743
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-02T00:00:00.000Z",
        "engagementCount": 876
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-02T00:00:00.000Z",
        "engagementCount": 2435
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-03T00:00:00.000Z",
        "engagementCount": 1372
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-03T00:00:00.000Z",
        "engagementCount": 727
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-03T00:00:00.000Z",
        "engagementCount": 1932
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-03T00:00:00.000Z",
        "engagementCount": 1243
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-03T00:00:00.000Z",
        "engagementCount": 1232
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-04T00:00:00.000Z",
        "engagementCount": 1329
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-04T00:00:00.000Z",
        "engagementCount": 1003
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-04T00:00:00.000Z",
        "engagementCount": 2085
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-04T00:00:00.000Z",
        "engagementCount": 907
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-04T00:00:00.000Z",
        "engagementCount": 1813
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-05T00:00:00.000Z",
        "engagementCount": 686
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-05T00:00:00.000Z",
        "engagementCount": 997
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-05T00:00:00.000Z",
        "engagementCount": 1890
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-05T00:00:00.000Z",
        "engagementCount": 1819
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-05T00:00:00.000Z",
        "engagementCount": 2564
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-06T00:00:00.000Z",
        "engagementCount": 1163
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-06T00:00:00.000Z",
        "engagementCount": 1537
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-06T00:00:00.000Z",
        "engagementCount": 2058
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-06T00:00:00.000Z",
        "engagementCount": 2094
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-06T00:00:00.000Z",
        "engagementCount": 2425
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-07T00:00:00.000Z",
        "engagementCount": 867
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-07T00:00:00.000Z",
        "engagementCount": 734
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-07T00:00:00.000Z",
        "engagementCount": 2002
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-07T00:00:00.000Z",
        "engagementCount": 1193
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-07T00:00:00.000Z",
        "engagementCount": 2154
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-08T00:00:00.000Z",
        "engagementCount": 1281
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-08T00:00:00.000Z",
        "engagementCount": 1392
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-08T00:00:00.000Z",
        "engagementCount": 797
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-08T00:00:00.000Z",
        "engagementCount": 1093
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-08T00:00:00.000Z",
        "engagementCount": 2094
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-09T00:00:00.000Z",
        "engagementCount": 1041
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-09T00:00:00.000Z",
        "engagementCount": 1853
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-09T00:00:00.000Z",
        "engagementCount": 1313
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-09T00:00:00.000Z",
        "engagementCount": 1457
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-09T00:00:00.000Z",
        "engagementCount": 1650
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-10T00:00:00.000Z",
        "engagementCount": 961
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-10T00:00:00.000Z",
        "engagementCount": 763
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-10T00:00:00.000Z",
        "engagementCount": 1315
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-10T00:00:00.000Z",
        "engagementCount": 2292
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-10T00:00:00.000Z",
        "engagementCount": 2555
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-11T00:00:00.000Z",
        "engagementCount": 1461
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-11T00:00:00.000Z",
        "engagementCount": 1269
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-11T00:00:00.000Z",
        "engagementCount": 1745
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-11T00:00:00.000Z",
        "engagementCount": 1018
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-11T00:00:00.000Z",
        "engagementCount": 1323
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-12T00:00:00.000Z",
        "engagementCount": 1048
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-12T00:00:00.000Z",
        "engagementCount": 1056
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-12T00:00:00.000Z",
        "engagementCount": 1611
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-12T00:00:00.000Z",
        "engagementCount": 1617
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-12T00:00:00.000Z",
        "engagementCount": 1739
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-13T00:00:00.000Z",
        "engagementCount": 636
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-13T00:00:00.000Z",
        "engagementCount": 1085
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-13T00:00:00.000Z",
        "engagementCount": 1671
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-13T00:00:00.000Z",
        "engagementCount": 2263
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-13T00:00:00.000Z",
        "engagementCount": 2364
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-14T00:00:00.000Z",
        "engagementCount": 1039
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-14T00:00:00.000Z",
        "engagementCount": 1306
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-14T00:00:00.000Z",
        "engagementCount": 1423
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-14T00:00:00.000Z",
        "engagementCount": 1429
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-14T00:00:00.000Z",
        "engagementCount": 1025
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-15T00:00:00.000Z",
        "engagementCount": 1440
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-15T00:00:00.000Z",
        "engagementCount": 933
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-15T00:00:00.000Z",
        "engagementCount": 986
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-15T00:00:00.000Z",
        "engagementCount": 1134
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-15T00:00:00.000Z",
        "engagementCount": 2336
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-16T00:00:00.000Z",
        "engagementCount": 641
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-16T00:00:00.000Z",
        "engagementCount": 1452
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-16T00:00:00.000Z",
        "engagementCount": 1964
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-16T00:00:00.000Z",
        "engagementCount": 1257
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-16T00:00:00.000Z",
        "engagementCount": 1850
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-17T00:00:00.000Z",
        "engagementCount": 960
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-17T00:00:00.000Z",
        "engagementCount": 1413
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-17T00:00:00.000Z",
        "engagementCount": 1964
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-17T00:00:00.000Z",
        "engagementCount": 1678
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-17T00:00:00.000Z",
        "engagementCount": 1318
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-18T00:00:00.000Z",
        "engagementCount": 1004
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-18T00:00:00.000Z",
        "engagementCount": 685
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-18T00:00:00.000Z",
        "engagementCount": 1245
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-18T00:00:00.000Z",
        "engagementCount": 2031
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-18T00:00:00.000Z",
        "engagementCount": 1798
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-19T00:00:00.000Z",
        "engagementCount": 1707
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-19T00:00:00.000Z",
        "engagementCount": 1293
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-19T00:00:00.000Z",
        "engagementCount": 1477
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-19T00:00:00.000Z",
        "engagementCount": 2266
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-19T00:00:00.000Z",
        "engagementCount": 2172
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-20T00:00:00.000Z",
        "engagementCount": 740
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-20T00:00:00.000Z",
        "engagementCount": 1851
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-20T00:00:00.000Z",
        "engagementCount": 1384
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-20T00:00:00.000Z",
        "engagementCount": 990
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-20T00:00:00.000Z",
        "engagementCount": 1957
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-21T00:00:00.000Z",
        "engagementCount": 1136
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-21T00:00:00.000Z",
        "engagementCount": 1631
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-21T00:00:00.000Z",
        "engagementCount": 1380
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-21T00:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-21T00:00:00.000Z",
        "engagementCount": 2262
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-22T00:00:00.000Z",
        "engagementCount": 684
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-22T00:00:00.000Z",
        "engagementCount": 996
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-22T00:00:00.000Z",
        "engagementCount": 1175
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-22T00:00:00.000Z",
        "engagementCount": 2267
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-22T00:00:00.000Z",
        "engagementCount": 1888
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-23T00:00:00.000Z",
        "engagementCount": 803
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-23T00:00:00.000Z",
        "engagementCount": 1677
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-23T00:00:00.000Z",
        "engagementCount": 1773
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-23T00:00:00.000Z",
        "engagementCount": 1652
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-23T00:00:00.000Z",
        "engagementCount": 1915
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-24T00:00:00.000Z",
        "engagementCount": 1316
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-24T00:00:00.000Z",
        "engagementCount": 655
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-24T00:00:00.000Z",
        "engagementCount": 2091
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-24T00:00:00.000Z",
        "engagementCount": 894
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-24T00:00:00.000Z",
        "engagementCount": 1828
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-25T00:00:00.000Z",
        "engagementCount": 647
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-25T00:00:00.000Z",
        "engagementCount": 969
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-25T00:00:00.000Z",
        "engagementCount": 1698
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-25T00:00:00.000Z",
        "engagementCount": 1374
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-25T00:00:00.000Z",
        "engagementCount": 1468
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-26T00:00:00.000Z",
        "engagementCount": 1690
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-26T00:00:00.000Z",
        "engagementCount": 1293
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-26T00:00:00.000Z",
        "engagementCount": 1247
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-26T00:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-26T00:00:00.000Z",
        "engagementCount": 1430
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-27T00:00:00.000Z",
        "engagementCount": 798
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-27T00:00:00.000Z",
        "engagementCount": 809
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-27T00:00:00.000Z",
        "engagementCount": 872
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-27T00:00:00.000Z",
        "engagementCount": 1349
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-27T00:00:00.000Z",
        "engagementCount": 2124
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-28T00:00:00.000Z",
        "engagementCount": 1074
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-28T00:00:00.000Z",
        "engagementCount": 1532
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-28T00:00:00.000Z",
        "engagementCount": 2071
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-28T00:00:00.000Z",
        "engagementCount": 1517
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-28T00:00:00.000Z",
        "engagementCount": 1987
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-29T00:00:00.000Z",
        "engagementCount": 1172
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-29T00:00:00.000Z",
        "engagementCount": 1549
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-29T00:00:00.000Z",
        "engagementCount": 1051
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-29T00:00:00.000Z",
        "engagementCount": 2202
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-29T00:00:00.000Z",
        "engagementCount": 867
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2021-12-30T00:00:00.000Z",
        "engagementCount": 758
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2021-12-30T00:00:00.000Z",
        "engagementCount": 767
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2021-12-30T00:00:00.000Z",
        "engagementCount": 1094
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2021-12-30T00:00:00.000Z",
        "engagementCount": 794
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2021-12-30T00:00:00.000Z",
        "engagementCount": 1730
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-01T00:00:00.000Z",
        "engagementCount": 933
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-01T00:00:00.000Z",
        "engagementCount": 1842
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-01T00:00:00.000Z",
        "engagementCount": 1748
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-01T00:00:00.000Z",
        "engagementCount": 1174
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-01T00:00:00.000Z",
        "engagementCount": 2117
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-02T00:00:00.000Z",
        "engagementCount": 1364
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-02T00:00:00.000Z",
        "engagementCount": 1454
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-02T00:00:00.000Z",
        "engagementCount": 1639
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-02T00:00:00.000Z",
        "engagementCount": 2230
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-02T00:00:00.000Z",
        "engagementCount": 1953
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-03T00:00:00.000Z",
        "engagementCount": 1182
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-03T00:00:00.000Z",
        "engagementCount": 1534
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-03T00:00:00.000Z",
        "engagementCount": 1217
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-03T00:00:00.000Z",
        "engagementCount": 1788
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-03T00:00:00.000Z",
        "engagementCount": 1202
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-04T00:00:00.000Z",
        "engagementCount": 1113
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-04T00:00:00.000Z",
        "engagementCount": 920
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-04T00:00:00.000Z",
        "engagementCount": 1839
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-04T00:00:00.000Z",
        "engagementCount": 1682
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-04T00:00:00.000Z",
        "engagementCount": 1104
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-05T00:00:00.000Z",
        "engagementCount": 1350
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-05T00:00:00.000Z",
        "engagementCount": 1303
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-05T00:00:00.000Z",
        "engagementCount": 1565
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-05T00:00:00.000Z",
        "engagementCount": 1192
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-05T00:00:00.000Z",
        "engagementCount": 1430
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-06T00:00:00.000Z",
        "engagementCount": 952
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-06T00:00:00.000Z",
        "engagementCount": 1083
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-06T00:00:00.000Z",
        "engagementCount": 2097
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-06T00:00:00.000Z",
        "engagementCount": 1827
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-06T00:00:00.000Z",
        "engagementCount": 874
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-07T00:00:00.000Z",
        "engagementCount": 641
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-07T00:00:00.000Z",
        "engagementCount": 1142
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-07T00:00:00.000Z",
        "engagementCount": 1054
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-07T00:00:00.000Z",
        "engagementCount": 1768
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-07T00:00:00.000Z",
        "engagementCount": 1505
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-08T00:00:00.000Z",
        "engagementCount": 1156
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-08T00:00:00.000Z",
        "engagementCount": 1774
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-08T00:00:00.000Z",
        "engagementCount": 1561
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-08T00:00:00.000Z",
        "engagementCount": 1704
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-08T00:00:00.000Z",
        "engagementCount": 2334
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-09T00:00:00.000Z",
        "engagementCount": 816
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-09T00:00:00.000Z",
        "engagementCount": 1722
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-09T00:00:00.000Z",
        "engagementCount": 765
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-09T00:00:00.000Z",
        "engagementCount": 1025
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-09T00:00:00.000Z",
        "engagementCount": 1111
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-10T00:00:00.000Z",
        "engagementCount": 1649
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-10T00:00:00.000Z",
        "engagementCount": 1157
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-10T00:00:00.000Z",
        "engagementCount": 1073
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-10T00:00:00.000Z",
        "engagementCount": 1084
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-10T00:00:00.000Z",
        "engagementCount": 2355
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-11T00:00:00.000Z",
        "engagementCount": 1084
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-11T00:00:00.000Z",
        "engagementCount": 833
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-11T00:00:00.000Z",
        "engagementCount": 1871
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-11T00:00:00.000Z",
        "engagementCount": 2167
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-11T00:00:00.000Z",
        "engagementCount": 1876
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-12T00:00:00.000Z",
        "engagementCount": 1462
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-12T00:00:00.000Z",
        "engagementCount": 995
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-12T00:00:00.000Z",
        "engagementCount": 768
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-12T00:00:00.000Z",
        "engagementCount": 884
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-12T00:00:00.000Z",
        "engagementCount": 2177
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-13T00:00:00.000Z",
        "engagementCount": 1055
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-13T00:00:00.000Z",
        "engagementCount": 647
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-13T00:00:00.000Z",
        "engagementCount": 1146
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-13T00:00:00.000Z",
        "engagementCount": 1476
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-13T00:00:00.000Z",
        "engagementCount": 1518
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-14T00:00:00.000Z",
        "engagementCount": 1391
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-14T00:00:00.000Z",
        "engagementCount": 1092
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-14T00:00:00.000Z",
        "engagementCount": 1447
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-14T00:00:00.000Z",
        "engagementCount": 1717
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-14T00:00:00.000Z",
        "engagementCount": 1445
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-15T00:00:00.000Z",
        "engagementCount": 1087
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-15T00:00:00.000Z",
        "engagementCount": 1247
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-15T00:00:00.000Z",
        "engagementCount": 1200
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-15T00:00:00.000Z",
        "engagementCount": 916
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-15T00:00:00.000Z",
        "engagementCount": 1628
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-16T00:00:00.000Z",
        "engagementCount": 1066
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-16T00:00:00.000Z",
        "engagementCount": 869
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-16T00:00:00.000Z",
        "engagementCount": 1125
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-16T00:00:00.000Z",
        "engagementCount": 1577
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-16T00:00:00.000Z",
        "engagementCount": 868
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-17T00:00:00.000Z",
        "engagementCount": 1036
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-17T00:00:00.000Z",
        "engagementCount": 919
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-17T00:00:00.000Z",
        "engagementCount": 1407
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-17T00:00:00.000Z",
        "engagementCount": 780
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-17T00:00:00.000Z",
        "engagementCount": 1450
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-18T00:00:00.000Z",
        "engagementCount": 1005
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-18T00:00:00.000Z",
        "engagementCount": 1726
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-18T00:00:00.000Z",
        "engagementCount": 1329
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-18T00:00:00.000Z",
        "engagementCount": 1840
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-18T00:00:00.000Z",
        "engagementCount": 1478
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-19T00:00:00.000Z",
        "engagementCount": 1464
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-19T00:00:00.000Z",
        "engagementCount": 1134
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-19T00:00:00.000Z",
        "engagementCount": 1252
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-19T00:00:00.000Z",
        "engagementCount": 1330
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-19T00:00:00.000Z",
        "engagementCount": 2340
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-20T00:00:00.000Z",
        "engagementCount": 1394
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-20T00:00:00.000Z",
        "engagementCount": 1477
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-20T00:00:00.000Z",
        "engagementCount": 1372
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-20T00:00:00.000Z",
        "engagementCount": 1371
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-20T00:00:00.000Z",
        "engagementCount": 2488
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-21T00:00:00.000Z",
        "engagementCount": 885
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-21T00:00:00.000Z",
        "engagementCount": 1155
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-21T00:00:00.000Z",
        "engagementCount": 1925
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-21T00:00:00.000Z",
        "engagementCount": 1128
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-21T00:00:00.000Z",
        "engagementCount": 2270
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-22T00:00:00.000Z",
        "engagementCount": 1278
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-22T00:00:00.000Z",
        "engagementCount": 1368
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-22T00:00:00.000Z",
        "engagementCount": 1655
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-22T00:00:00.000Z",
        "engagementCount": 1754
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-22T00:00:00.000Z",
        "engagementCount": 1745
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-23T00:00:00.000Z",
        "engagementCount": 1111
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-23T00:00:00.000Z",
        "engagementCount": 953
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-23T00:00:00.000Z",
        "engagementCount": 814
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-23T00:00:00.000Z",
        "engagementCount": 1888
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-23T00:00:00.000Z",
        "engagementCount": 1346
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-24T00:00:00.000Z",
        "engagementCount": 1052
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-24T00:00:00.000Z",
        "engagementCount": 1372
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-24T00:00:00.000Z",
        "engagementCount": 1869
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-24T00:00:00.000Z",
        "engagementCount": 1839
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-24T00:00:00.000Z",
        "engagementCount": 1712
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-25T00:00:00.000Z",
        "engagementCount": 1585
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-25T00:00:00.000Z",
        "engagementCount": 909
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-25T00:00:00.000Z",
        "engagementCount": 1969
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-25T00:00:00.000Z",
        "engagementCount": 1322
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-25T00:00:00.000Z",
        "engagementCount": 1431
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-26T00:00:00.000Z",
        "engagementCount": 1285
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-26T00:00:00.000Z",
        "engagementCount": 727
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-26T00:00:00.000Z",
        "engagementCount": 1262
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-26T00:00:00.000Z",
        "engagementCount": 1071
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-26T00:00:00.000Z",
        "engagementCount": 922
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-27T00:00:00.000Z",
        "engagementCount": 1416
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-27T00:00:00.000Z",
        "engagementCount": 1785
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-27T00:00:00.000Z",
        "engagementCount": 2042
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-27T00:00:00.000Z",
        "engagementCount": 1434
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-27T00:00:00.000Z",
        "engagementCount": 1805
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-28T00:00:00.000Z",
        "engagementCount": 932
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-28T00:00:00.000Z",
        "engagementCount": 1054
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-28T00:00:00.000Z",
        "engagementCount": 876
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-28T00:00:00.000Z",
        "engagementCount": 1055
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-28T00:00:00.000Z",
        "engagementCount": 2118
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-29T00:00:00.000Z",
        "engagementCount": 1430
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-29T00:00:00.000Z",
        "engagementCount": 1132
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-29T00:00:00.000Z",
        "engagementCount": 817
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-29T00:00:00.000Z",
        "engagementCount": 2256
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-29T00:00:00.000Z",
        "engagementCount": 1361
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-30T00:00:00.000Z",
        "engagementCount": 599
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-30T00:00:00.000Z",
        "engagementCount": 1489
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-30T00:00:00.000Z",
        "engagementCount": 1141
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-30T00:00:00.000Z",
        "engagementCount": 991
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-30T00:00:00.000Z",
        "engagementCount": 2127
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-01-31T00:00:00.000Z",
        "engagementCount": 1339
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-01-31T00:00:00.000Z",
        "engagementCount": 1236
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-01-31T00:00:00.000Z",
        "engagementCount": 1076
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-01-31T00:00:00.000Z",
        "engagementCount": 1312
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-01-31T00:00:00.000Z",
        "engagementCount": 2220
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-01T00:00:00.000Z",
        "engagementCount": 1554
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-01T00:00:00.000Z",
        "engagementCount": 1080
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-01T00:00:00.000Z",
        "engagementCount": 2289
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-01T00:00:00.000Z",
        "engagementCount": 1181
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-01T00:00:00.000Z",
        "engagementCount": 2673
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-02T00:00:00.000Z",
        "engagementCount": 1413
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-02T00:00:00.000Z",
        "engagementCount": 1216
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-02T00:00:00.000Z",
        "engagementCount": 2351
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-02T00:00:00.000Z",
        "engagementCount": 1664
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-02T00:00:00.000Z",
        "engagementCount": 2778
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-03T00:00:00.000Z",
        "engagementCount": 962
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-03T00:00:00.000Z",
        "engagementCount": 988
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-03T00:00:00.000Z",
        "engagementCount": 1438
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-03T00:00:00.000Z",
        "engagementCount": 1807
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-03T00:00:00.000Z",
        "engagementCount": 1737
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-04T00:00:00.000Z",
        "engagementCount": 1262
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-04T00:00:00.000Z",
        "engagementCount": 964
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-04T00:00:00.000Z",
        "engagementCount": 1161
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-04T00:00:00.000Z",
        "engagementCount": 2201
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-04T00:00:00.000Z",
        "engagementCount": 1151
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-05T00:00:00.000Z",
        "engagementCount": 1213
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-05T00:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-05T00:00:00.000Z",
        "engagementCount": 1097
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-05T00:00:00.000Z",
        "engagementCount": 2508
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-05T00:00:00.000Z",
        "engagementCount": 1688
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-06T00:00:00.000Z",
        "engagementCount": 704
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-06T00:00:00.000Z",
        "engagementCount": 1943
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-06T00:00:00.000Z",
        "engagementCount": 1540
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-06T00:00:00.000Z",
        "engagementCount": 2061
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-06T00:00:00.000Z",
        "engagementCount": 1528
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-07T00:00:00.000Z",
        "engagementCount": 1359
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-07T00:00:00.000Z",
        "engagementCount": 1498
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-07T00:00:00.000Z",
        "engagementCount": 2398
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-07T00:00:00.000Z",
        "engagementCount": 948
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-07T00:00:00.000Z",
        "engagementCount": 2573
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-08T00:00:00.000Z",
        "engagementCount": 1324
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-08T00:00:00.000Z",
        "engagementCount": 1514
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-08T00:00:00.000Z",
        "engagementCount": 1967
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-08T00:00:00.000Z",
        "engagementCount": 1102
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-08T00:00:00.000Z",
        "engagementCount": 1793
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-09T00:00:00.000Z",
        "engagementCount": 1876
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-09T00:00:00.000Z",
        "engagementCount": 769
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-09T00:00:00.000Z",
        "engagementCount": 2362
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-09T00:00:00.000Z",
        "engagementCount": 2596
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-09T00:00:00.000Z",
        "engagementCount": 2542
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-10T00:00:00.000Z",
        "engagementCount": 1538
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-10T00:00:00.000Z",
        "engagementCount": 1473
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-10T00:00:00.000Z",
        "engagementCount": 1735
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-10T00:00:00.000Z",
        "engagementCount": 1880
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-10T00:00:00.000Z",
        "engagementCount": 2141
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-11T00:00:00.000Z",
        "engagementCount": 715
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-11T00:00:00.000Z",
        "engagementCount": 1314
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-11T00:00:00.000Z",
        "engagementCount": 1370
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-11T00:00:00.000Z",
        "engagementCount": 1481
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-11T00:00:00.000Z",
        "engagementCount": 2514
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-12T00:00:00.000Z",
        "engagementCount": 1229
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-12T00:00:00.000Z",
        "engagementCount": 1547
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-12T00:00:00.000Z",
        "engagementCount": 1841
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-12T00:00:00.000Z",
        "engagementCount": 2456
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-12T00:00:00.000Z",
        "engagementCount": 2688
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-13T00:00:00.000Z",
        "engagementCount": 650
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-13T00:00:00.000Z",
        "engagementCount": 1041
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-13T00:00:00.000Z",
        "engagementCount": 2153
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-13T00:00:00.000Z",
        "engagementCount": 1855
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-13T00:00:00.000Z",
        "engagementCount": 1482
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-14T00:00:00.000Z",
        "engagementCount": 967
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-14T00:00:00.000Z",
        "engagementCount": 2120
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-14T00:00:00.000Z",
        "engagementCount": 1345
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-14T00:00:00.000Z",
        "engagementCount": 2235
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-14T00:00:00.000Z",
        "engagementCount": 1385
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-15T00:00:00.000Z",
        "engagementCount": 1496
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-15T00:00:00.000Z",
        "engagementCount": 2062
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-15T00:00:00.000Z",
        "engagementCount": 2162
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-15T00:00:00.000Z",
        "engagementCount": 2055
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-15T00:00:00.000Z",
        "engagementCount": 1807
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-16T00:00:00.000Z",
        "engagementCount": 827
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-16T00:00:00.000Z",
        "engagementCount": 993
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-16T00:00:00.000Z",
        "engagementCount": 1794
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-16T00:00:00.000Z",
        "engagementCount": 2278
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-16T00:00:00.000Z",
        "engagementCount": 1167
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-17T00:00:00.000Z",
        "engagementCount": 910
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-17T00:00:00.000Z",
        "engagementCount": 745
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-17T00:00:00.000Z",
        "engagementCount": 1898
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-17T00:00:00.000Z",
        "engagementCount": 2565
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-17T00:00:00.000Z",
        "engagementCount": 1461
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-18T00:00:00.000Z",
        "engagementCount": 1379
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-18T00:00:00.000Z",
        "engagementCount": 1268
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-18T00:00:00.000Z",
        "engagementCount": 866
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-18T00:00:00.000Z",
        "engagementCount": 1010
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-18T00:00:00.000Z",
        "engagementCount": 2655
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-19T00:00:00.000Z",
        "engagementCount": 1667
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-19T00:00:00.000Z",
        "engagementCount": 1905
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-19T00:00:00.000Z",
        "engagementCount": 1525
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-19T00:00:00.000Z",
        "engagementCount": 1907
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-19T00:00:00.000Z",
        "engagementCount": 1016
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-20T00:00:00.000Z",
        "engagementCount": 970
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-20T00:00:00.000Z",
        "engagementCount": 1720
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-20T00:00:00.000Z",
        "engagementCount": 2388
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-20T00:00:00.000Z",
        "engagementCount": 1874
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-20T00:00:00.000Z",
        "engagementCount": 1224
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-21T00:00:00.000Z",
        "engagementCount": 798
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-21T00:00:00.000Z",
        "engagementCount": 2115
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-21T00:00:00.000Z",
        "engagementCount": 2274
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-21T00:00:00.000Z",
        "engagementCount": 2023
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-21T00:00:00.000Z",
        "engagementCount": 1903
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-22T00:00:00.000Z",
        "engagementCount": 1027
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-22T00:00:00.000Z",
        "engagementCount": 1097
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-22T00:00:00.000Z",
        "engagementCount": 982
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-22T00:00:00.000Z",
        "engagementCount": 2116
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-22T00:00:00.000Z",
        "engagementCount": 1508
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-23T00:00:00.000Z",
        "engagementCount": 1700
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-23T00:00:00.000Z",
        "engagementCount": 852
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-23T00:00:00.000Z",
        "engagementCount": 1382
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-23T00:00:00.000Z",
        "engagementCount": 1368
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-23T00:00:00.000Z",
        "engagementCount": 1772
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-24T00:00:00.000Z",
        "engagementCount": 1646
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-24T00:00:00.000Z",
        "engagementCount": 1219
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-24T00:00:00.000Z",
        "engagementCount": 1015
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-24T00:00:00.000Z",
        "engagementCount": 2155
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-24T00:00:00.000Z",
        "engagementCount": 1605
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-25T00:00:00.000Z",
        "engagementCount": 811
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-25T00:00:00.000Z",
        "engagementCount": 1216
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-25T00:00:00.000Z",
        "engagementCount": 1661
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-25T00:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-25T00:00:00.000Z",
        "engagementCount": 2047
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-26T00:00:00.000Z",
        "engagementCount": 727
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-26T00:00:00.000Z",
        "engagementCount": 2124
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-26T00:00:00.000Z",
        "engagementCount": 1702
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-26T00:00:00.000Z",
        "engagementCount": 976
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-26T00:00:00.000Z",
        "engagementCount": 1719
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-27T00:00:00.000Z",
        "engagementCount": 822
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-27T00:00:00.000Z",
        "engagementCount": 1723
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-27T00:00:00.000Z",
        "engagementCount": 1932
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-27T00:00:00.000Z",
        "engagementCount": 1833
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-27T00:00:00.000Z",
        "engagementCount": 2856
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-02-28T00:00:00.000Z",
        "engagementCount": 1548
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-02-28T00:00:00.000Z",
        "engagementCount": 1253
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-02-28T00:00:00.000Z",
        "engagementCount": 1646
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-02-28T00:00:00.000Z",
        "engagementCount": 1006
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-02-28T00:00:00.000Z",
        "engagementCount": 2722
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 1884
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 928
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 1221
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 916
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 1043
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1451
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1665
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1966
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1821
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1178
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 1320
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 1743
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 884
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 2568
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 1076
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 1325
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 2111
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 1420
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 2365
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-01T00:00:00.000Z",
        "engagementCount": 2981
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1173
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 2275
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1545
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1949
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-02T00:00:00.000Z",
        "engagementCount": 1160
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 1447
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 1281
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 1249
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 2690
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-03T00:00:00.000Z",
        "engagementCount": 1883
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-04T00:00:00.000Z",
        "engagementCount": 902
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-04T00:00:00.000Z",
        "engagementCount": 1685
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-04T00:00:00.000Z",
        "engagementCount": 2264
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-04T00:00:00.000Z",
        "engagementCount": 2742
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-04T00:00:00.000Z",
        "engagementCount": 1652
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-05T00:00:00.000Z",
        "engagementCount": 1591
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-05T00:00:00.000Z",
        "engagementCount": 1743
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-05T00:00:00.000Z",
        "engagementCount": 1503
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-05T00:00:00.000Z",
        "engagementCount": 2600
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-05T00:00:00.000Z",
        "engagementCount": 2540
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-06T00:00:00.000Z",
        "engagementCount": 910
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-06T00:00:00.000Z",
        "engagementCount": 877
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-06T00:00:00.000Z",
        "engagementCount": 1681
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-06T00:00:00.000Z",
        "engagementCount": 1793
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-06T00:00:00.000Z",
        "engagementCount": 1692
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-07T00:00:00.000Z",
        "engagementCount": 1032
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-07T00:00:00.000Z",
        "engagementCount": 1202
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-07T00:00:00.000Z",
        "engagementCount": 1787
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-07T00:00:00.000Z",
        "engagementCount": 2550
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-07T00:00:00.000Z",
        "engagementCount": 3154
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-08T00:00:00.000Z",
        "engagementCount": 1096
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-08T00:00:00.000Z",
        "engagementCount": 1037
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-08T00:00:00.000Z",
        "engagementCount": 2260
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-08T00:00:00.000Z",
        "engagementCount": 1769
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-08T00:00:00.000Z",
        "engagementCount": 1653
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-09T00:00:00.000Z",
        "engagementCount": 1541
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-09T00:00:00.000Z",
        "engagementCount": 1866
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-09T00:00:00.000Z",
        "engagementCount": 1340
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-09T00:00:00.000Z",
        "engagementCount": 2159
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-09T00:00:00.000Z",
        "engagementCount": 1717
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-10T00:00:00.000Z",
        "engagementCount": 957
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-10T00:00:00.000Z",
        "engagementCount": 892
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-10T00:00:00.000Z",
        "engagementCount": 2164
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-10T00:00:00.000Z",
        "engagementCount": 1750
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-10T00:00:00.000Z",
        "engagementCount": 1133
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-11T00:00:00.000Z",
        "engagementCount": 1391
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-11T00:00:00.000Z",
        "engagementCount": 1771
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-11T00:00:00.000Z",
        "engagementCount": 1725
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-11T00:00:00.000Z",
        "engagementCount": 1183
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-11T00:00:00.000Z",
        "engagementCount": 1397
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-12T00:00:00.000Z",
        "engagementCount": 825
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-12T00:00:00.000Z",
        "engagementCount": 1867
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-12T00:00:00.000Z",
        "engagementCount": 1476
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-12T00:00:00.000Z",
        "engagementCount": 1015
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-12T00:00:00.000Z",
        "engagementCount": 1217
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-13T00:00:00.000Z",
        "engagementCount": 845
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-13T00:00:00.000Z",
        "engagementCount": 1974
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-13T00:00:00.000Z",
        "engagementCount": 2067
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-13T00:00:00.000Z",
        "engagementCount": 2781
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-13T00:00:00.000Z",
        "engagementCount": 3029
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-14T00:00:00.000Z",
        "engagementCount": 1113
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-14T00:00:00.000Z",
        "engagementCount": 2277
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-14T00:00:00.000Z",
        "engagementCount": 1102
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-14T00:00:00.000Z",
        "engagementCount": 2532
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-14T00:00:00.000Z",
        "engagementCount": 2697
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-15T00:00:00.000Z",
        "engagementCount": 1076
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-15T00:00:00.000Z",
        "engagementCount": 1779
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-15T00:00:00.000Z",
        "engagementCount": 2070
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-15T00:00:00.000Z",
        "engagementCount": 2525
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-15T00:00:00.000Z",
        "engagementCount": 1391
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-16T00:00:00.000Z",
        "engagementCount": 1137
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-16T00:00:00.000Z",
        "engagementCount": 2389
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-16T00:00:00.000Z",
        "engagementCount": 2509
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-16T00:00:00.000Z",
        "engagementCount": 1847
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-16T00:00:00.000Z",
        "engagementCount": 2472
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-17T00:00:00.000Z",
        "engagementCount": 1082
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-17T00:00:00.000Z",
        "engagementCount": 1195
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-17T00:00:00.000Z",
        "engagementCount": 2123
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-17T00:00:00.000Z",
        "engagementCount": 2835
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-17T00:00:00.000Z",
        "engagementCount": 2765
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-18T00:00:00.000Z",
        "engagementCount": 952
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-18T00:00:00.000Z",
        "engagementCount": 1605
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-18T00:00:00.000Z",
        "engagementCount": 2154
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-18T00:00:00.000Z",
        "engagementCount": 1417
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-18T00:00:00.000Z",
        "engagementCount": 3006
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-19T00:00:00.000Z",
        "engagementCount": 836
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-19T00:00:00.000Z",
        "engagementCount": 1748
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-19T00:00:00.000Z",
        "engagementCount": 2276
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-19T00:00:00.000Z",
        "engagementCount": 2483
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-19T00:00:00.000Z",
        "engagementCount": 1616
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-20T00:00:00.000Z",
        "engagementCount": 729
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-20T00:00:00.000Z",
        "engagementCount": 1354
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-20T00:00:00.000Z",
        "engagementCount": 954
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-20T00:00:00.000Z",
        "engagementCount": 1277
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-20T00:00:00.000Z",
        "engagementCount": 1997
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-21T00:00:00.000Z",
        "engagementCount": 1673
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-21T00:00:00.000Z",
        "engagementCount": 1607
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-21T00:00:00.000Z",
        "engagementCount": 2294
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-21T00:00:00.000Z",
        "engagementCount": 1452
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-21T00:00:00.000Z",
        "engagementCount": 1720
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-22T00:00:00.000Z",
        "engagementCount": 1858
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-22T00:00:00.000Z",
        "engagementCount": 1938
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-22T00:00:00.000Z",
        "engagementCount": 1711
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-22T00:00:00.000Z",
        "engagementCount": 2708
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-22T00:00:00.000Z",
        "engagementCount": 2871
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-23T00:00:00.000Z",
        "engagementCount": 730
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-23T00:00:00.000Z",
        "engagementCount": 1474
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-23T00:00:00.000Z",
        "engagementCount": 1676
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-23T00:00:00.000Z",
        "engagementCount": 1317
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-23T00:00:00.000Z",
        "engagementCount": 3120
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-24T00:00:00.000Z",
        "engagementCount": 2139
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-24T00:00:00.000Z",
        "engagementCount": 968
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-24T00:00:00.000Z",
        "engagementCount": 1415
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-24T00:00:00.000Z",
        "engagementCount": 2571
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-24T00:00:00.000Z",
        "engagementCount": 1440
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-25T00:00:00.000Z",
        "engagementCount": 1028
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-25T00:00:00.000Z",
        "engagementCount": 2003
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-25T00:00:00.000Z",
        "engagementCount": 1538
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-25T00:00:00.000Z",
        "engagementCount": 2109
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-25T00:00:00.000Z",
        "engagementCount": 1611
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-26T00:00:00.000Z",
        "engagementCount": 1104
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-26T00:00:00.000Z",
        "engagementCount": 2314
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-26T00:00:00.000Z",
        "engagementCount": 1047
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-26T00:00:00.000Z",
        "engagementCount": 2049
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-26T00:00:00.000Z",
        "engagementCount": 2804
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-27T00:00:00.000Z",
        "engagementCount": 1916
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-27T00:00:00.000Z",
        "engagementCount": 952
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-27T00:00:00.000Z",
        "engagementCount": 1506
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-27T00:00:00.000Z",
        "engagementCount": 2424
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-27T00:00:00.000Z",
        "engagementCount": 3031
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-27T23:00:00.000Z",
        "engagementCount": 2008
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-27T23:00:00.000Z",
        "engagementCount": 1824
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-27T23:00:00.000Z",
        "engagementCount": 2249
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-27T23:00:00.000Z",
        "engagementCount": 2565
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-27T23:00:00.000Z",
        "engagementCount": 1656
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-03-31T23:00:00.000Z",
        "engagementCount": 1944
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-03-31T23:00:00.000Z",
        "engagementCount": 1774
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-03-31T23:00:00.000Z",
        "engagementCount": 1138
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-03-31T23:00:00.000Z",
        "engagementCount": 1506
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-03-31T23:00:00.000Z",
        "engagementCount": 3530
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-01T23:00:00.000Z",
        "engagementCount": 1734
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-01T23:00:00.000Z",
        "engagementCount": 2308
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-01T23:00:00.000Z",
        "engagementCount": 2689
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-01T23:00:00.000Z",
        "engagementCount": 2660
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-01T23:00:00.000Z",
        "engagementCount": 2011
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-02T23:00:00.000Z",
        "engagementCount": 2051
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-02T23:00:00.000Z",
        "engagementCount": 2595
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-02T23:00:00.000Z",
        "engagementCount": 2496
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-02T23:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-02T23:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-03T23:00:00.000Z",
        "engagementCount": 908
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-03T23:00:00.000Z",
        "engagementCount": 1872
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-03T23:00:00.000Z",
        "engagementCount": 2666
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-03T23:00:00.000Z",
        "engagementCount": 2782
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-03T23:00:00.000Z",
        "engagementCount": 1873
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-04T23:00:00.000Z",
        "engagementCount": 1191
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-04T23:00:00.000Z",
        "engagementCount": 1252
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-04T23:00:00.000Z",
        "engagementCount": 1301
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-04T23:00:00.000Z",
        "engagementCount": 1486
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-04T23:00:00.000Z",
        "engagementCount": 2004
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-05T23:00:00.000Z",
        "engagementCount": 870
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-05T23:00:00.000Z",
        "engagementCount": 1978
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-05T23:00:00.000Z",
        "engagementCount": 1362
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-05T23:00:00.000Z",
        "engagementCount": 2825
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-05T23:00:00.000Z",
        "engagementCount": 2934
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-06T23:00:00.000Z",
        "engagementCount": 1459
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-06T23:00:00.000Z",
        "engagementCount": 919
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-06T23:00:00.000Z",
        "engagementCount": 1276
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-06T23:00:00.000Z",
        "engagementCount": 2207
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-06T23:00:00.000Z",
        "engagementCount": 2017
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-07T23:00:00.000Z",
        "engagementCount": 1597
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-07T23:00:00.000Z",
        "engagementCount": 2448
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-07T23:00:00.000Z",
        "engagementCount": 1196
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-07T23:00:00.000Z",
        "engagementCount": 1513
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-07T23:00:00.000Z",
        "engagementCount": 1557
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-08T23:00:00.000Z",
        "engagementCount": 1769
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-08T23:00:00.000Z",
        "engagementCount": 2631
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-08T23:00:00.000Z",
        "engagementCount": 1708
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-08T23:00:00.000Z",
        "engagementCount": 2250
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-08T23:00:00.000Z",
        "engagementCount": 3503
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-09T23:00:00.000Z",
        "engagementCount": 1166
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-09T23:00:00.000Z",
        "engagementCount": 1427
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-09T23:00:00.000Z",
        "engagementCount": 2387
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-09T23:00:00.000Z",
        "engagementCount": 1776
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-09T23:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-10T23:00:00.000Z",
        "engagementCount": 2282
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-10T23:00:00.000Z",
        "engagementCount": 2095
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-10T23:00:00.000Z",
        "engagementCount": 2528
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-10T23:00:00.000Z",
        "engagementCount": 1718
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-10T23:00:00.000Z",
        "engagementCount": 2050
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-11T23:00:00.000Z",
        "engagementCount": 1653
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-11T23:00:00.000Z",
        "engagementCount": 2682
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-11T23:00:00.000Z",
        "engagementCount": 1815
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-11T23:00:00.000Z",
        "engagementCount": 3063
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-11T23:00:00.000Z",
        "engagementCount": 2347
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-12T23:00:00.000Z",
        "engagementCount": 1520
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-12T23:00:00.000Z",
        "engagementCount": 1016
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-12T23:00:00.000Z",
        "engagementCount": 2305
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-12T23:00:00.000Z",
        "engagementCount": 2775
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-12T23:00:00.000Z",
        "engagementCount": 2066
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-13T23:00:00.000Z",
        "engagementCount": 1607
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-13T23:00:00.000Z",
        "engagementCount": 1129
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-13T23:00:00.000Z",
        "engagementCount": 1918
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-13T23:00:00.000Z",
        "engagementCount": 1546
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-13T23:00:00.000Z",
        "engagementCount": 2348
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-14T23:00:00.000Z",
        "engagementCount": 1030
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-14T23:00:00.000Z",
        "engagementCount": 1754
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-14T23:00:00.000Z",
        "engagementCount": 2609
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-14T23:00:00.000Z",
        "engagementCount": 3171
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-14T23:00:00.000Z",
        "engagementCount": 1262
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-15T23:00:00.000Z",
        "engagementCount": 2042
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-15T23:00:00.000Z",
        "engagementCount": 987
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-15T23:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-15T23:00:00.000Z",
        "engagementCount": 2726
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-15T23:00:00.000Z",
        "engagementCount": 2099
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-16T23:00:00.000Z",
        "engagementCount": 2073
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-16T23:00:00.000Z",
        "engagementCount": 2614
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-16T23:00:00.000Z",
        "engagementCount": 1228
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-16T23:00:00.000Z",
        "engagementCount": 3133
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-16T23:00:00.000Z",
        "engagementCount": 2273
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-17T23:00:00.000Z",
        "engagementCount": 800
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-17T23:00:00.000Z",
        "engagementCount": 2197
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-17T23:00:00.000Z",
        "engagementCount": 1506
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-17T23:00:00.000Z",
        "engagementCount": 2091
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-17T23:00:00.000Z",
        "engagementCount": 3123
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-18T23:00:00.000Z",
        "engagementCount": 1385
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-18T23:00:00.000Z",
        "engagementCount": 2274
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-18T23:00:00.000Z",
        "engagementCount": 1363
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-18T23:00:00.000Z",
        "engagementCount": 1175
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-18T23:00:00.000Z",
        "engagementCount": 2822
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-19T23:00:00.000Z",
        "engagementCount": 2386
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-19T23:00:00.000Z",
        "engagementCount": 1202
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-19T23:00:00.000Z",
        "engagementCount": 1018
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-19T23:00:00.000Z",
        "engagementCount": 1136
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-19T23:00:00.000Z",
        "engagementCount": 1450
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-20T23:00:00.000Z",
        "engagementCount": 2275
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-20T23:00:00.000Z",
        "engagementCount": 2385
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-20T23:00:00.000Z",
        "engagementCount": 1172
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-20T23:00:00.000Z",
        "engagementCount": 2789
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-20T23:00:00.000Z",
        "engagementCount": 3199
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-21T23:00:00.000Z",
        "engagementCount": 1070
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-21T23:00:00.000Z",
        "engagementCount": 2013
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-21T23:00:00.000Z",
        "engagementCount": 1467
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-21T23:00:00.000Z",
        "engagementCount": 3182
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-21T23:00:00.000Z",
        "engagementCount": 2269
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-22T23:00:00.000Z",
        "engagementCount": 960
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-22T23:00:00.000Z",
        "engagementCount": 2395
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-22T23:00:00.000Z",
        "engagementCount": 2277
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-22T23:00:00.000Z",
        "engagementCount": 2190
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-22T23:00:00.000Z",
        "engagementCount": 2564
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-23T23:00:00.000Z",
        "engagementCount": 2086
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-23T23:00:00.000Z",
        "engagementCount": 1581
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-23T23:00:00.000Z",
        "engagementCount": 1696
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-23T23:00:00.000Z",
        "engagementCount": 1209
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-23T23:00:00.000Z",
        "engagementCount": 1865
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-24T23:00:00.000Z",
        "engagementCount": 2192
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-24T23:00:00.000Z",
        "engagementCount": 1196
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-24T23:00:00.000Z",
        "engagementCount": 1361
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-24T23:00:00.000Z",
        "engagementCount": 2822
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-24T23:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-25T23:00:00.000Z",
        "engagementCount": 1419
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-25T23:00:00.000Z",
        "engagementCount": 2093
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-25T23:00:00.000Z",
        "engagementCount": 2679
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-25T23:00:00.000Z",
        "engagementCount": 1274
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-25T23:00:00.000Z",
        "engagementCount": 1320
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-26T23:00:00.000Z",
        "engagementCount": 2078
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-26T23:00:00.000Z",
        "engagementCount": 1870
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-26T23:00:00.000Z",
        "engagementCount": 2970
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-26T23:00:00.000Z",
        "engagementCount": 1290
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-26T23:00:00.000Z",
        "engagementCount": 2446
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-27T23:00:00.000Z",
        "engagementCount": 1401
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-27T23:00:00.000Z",
        "engagementCount": 1187
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-27T23:00:00.000Z",
        "engagementCount": 1728
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-27T23:00:00.000Z",
        "engagementCount": 2706
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-27T23:00:00.000Z",
        "engagementCount": 2160
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-28T23:00:00.000Z",
        "engagementCount": 2216
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-28T23:00:00.000Z",
        "engagementCount": 2023
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-28T23:00:00.000Z",
        "engagementCount": 1834
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-28T23:00:00.000Z",
        "engagementCount": 3253
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-28T23:00:00.000Z",
        "engagementCount": 1595
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-29T23:00:00.000Z",
        "engagementCount": 2221
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-29T23:00:00.000Z",
        "engagementCount": 1389
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-29T23:00:00.000Z",
        "engagementCount": 2078
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-29T23:00:00.000Z",
        "engagementCount": 1647
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-29T23:00:00.000Z",
        "engagementCount": 3064
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 2361
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 1167
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 1918
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 2676
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 1733
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 1251
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 1339
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 1607
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 2916
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-04-30T23:00:00.000Z",
        "engagementCount": 3743
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-01T23:00:00.000Z",
        "engagementCount": 2450
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-01T23:00:00.000Z",
        "engagementCount": 2609
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-01T23:00:00.000Z",
        "engagementCount": 1922
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-01T23:00:00.000Z",
        "engagementCount": 2596
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-01T23:00:00.000Z",
        "engagementCount": 1968
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-02T23:00:00.000Z",
        "engagementCount": 2113
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-02T23:00:00.000Z",
        "engagementCount": 1547
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-02T23:00:00.000Z",
        "engagementCount": 2722
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-02T23:00:00.000Z",
        "engagementCount": 1780
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-02T23:00:00.000Z",
        "engagementCount": 3199
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-03T23:00:00.000Z",
        "engagementCount": 1875
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-03T23:00:00.000Z",
        "engagementCount": 2644
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-03T23:00:00.000Z",
        "engagementCount": 2283
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-03T23:00:00.000Z",
        "engagementCount": 1825
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-03T23:00:00.000Z",
        "engagementCount": 3339
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-04T23:00:00.000Z",
        "engagementCount": 2010
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-04T23:00:00.000Z",
        "engagementCount": 2716
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-04T23:00:00.000Z",
        "engagementCount": 2145
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-04T23:00:00.000Z",
        "engagementCount": 2772
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-04T23:00:00.000Z",
        "engagementCount": 2458
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-05T23:00:00.000Z",
        "engagementCount": 2559
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-05T23:00:00.000Z",
        "engagementCount": 2594
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-05T23:00:00.000Z",
        "engagementCount": 1882
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-05T23:00:00.000Z",
        "engagementCount": 1742
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-05T23:00:00.000Z",
        "engagementCount": 2071
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-06T23:00:00.000Z",
        "engagementCount": 1712
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-06T23:00:00.000Z",
        "engagementCount": 1092
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-06T23:00:00.000Z",
        "engagementCount": 3228
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-06T23:00:00.000Z",
        "engagementCount": 2035
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-06T23:00:00.000Z",
        "engagementCount": 2713
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-07T23:00:00.000Z",
        "engagementCount": 1416
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-07T23:00:00.000Z",
        "engagementCount": 1574
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-07T23:00:00.000Z",
        "engagementCount": 3203
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-07T23:00:00.000Z",
        "engagementCount": 1672
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-07T23:00:00.000Z",
        "engagementCount": 3937
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-08T23:00:00.000Z",
        "engagementCount": 2102
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-08T23:00:00.000Z",
        "engagementCount": 2012
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-08T23:00:00.000Z",
        "engagementCount": 3009
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-08T23:00:00.000Z",
        "engagementCount": 1922
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-08T23:00:00.000Z",
        "engagementCount": 2960
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-09T23:00:00.000Z",
        "engagementCount": 1090
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-09T23:00:00.000Z",
        "engagementCount": 1141
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-09T23:00:00.000Z",
        "engagementCount": 1370
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-09T23:00:00.000Z",
        "engagementCount": 2995
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-09T23:00:00.000Z",
        "engagementCount": 1652
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-10T23:00:00.000Z",
        "engagementCount": 2161
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-10T23:00:00.000Z",
        "engagementCount": 2649
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-10T23:00:00.000Z",
        "engagementCount": 3229
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-10T23:00:00.000Z",
        "engagementCount": 3144
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-10T23:00:00.000Z",
        "engagementCount": 3730
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-11T23:00:00.000Z",
        "engagementCount": 1447
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-11T23:00:00.000Z",
        "engagementCount": 2830
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-11T23:00:00.000Z",
        "engagementCount": 2179
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-11T23:00:00.000Z",
        "engagementCount": 2149
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-11T23:00:00.000Z",
        "engagementCount": 3845
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-12T23:00:00.000Z",
        "engagementCount": 1249
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-12T23:00:00.000Z",
        "engagementCount": 2163
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-12T23:00:00.000Z",
        "engagementCount": 1142
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-12T23:00:00.000Z",
        "engagementCount": 2565
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-12T23:00:00.000Z",
        "engagementCount": 2751
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-13T23:00:00.000Z",
        "engagementCount": 1385
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-13T23:00:00.000Z",
        "engagementCount": 1502
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-13T23:00:00.000Z",
        "engagementCount": 2255
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-13T23:00:00.000Z",
        "engagementCount": 3476
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-13T23:00:00.000Z",
        "engagementCount": 1515
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-14T23:00:00.000Z",
        "engagementCount": 1419
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-14T23:00:00.000Z",
        "engagementCount": 2790
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-14T23:00:00.000Z",
        "engagementCount": 2294
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-14T23:00:00.000Z",
        "engagementCount": 2084
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-14T23:00:00.000Z",
        "engagementCount": 3618
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-15T23:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-15T23:00:00.000Z",
        "engagementCount": 2796
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-15T23:00:00.000Z",
        "engagementCount": 2281
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-15T23:00:00.000Z",
        "engagementCount": 1661
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-15T23:00:00.000Z",
        "engagementCount": 1422
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-16T23:00:00.000Z",
        "engagementCount": 1053
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-16T23:00:00.000Z",
        "engagementCount": 2680
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-16T23:00:00.000Z",
        "engagementCount": 2278
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-16T23:00:00.000Z",
        "engagementCount": 1485
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-16T23:00:00.000Z",
        "engagementCount": 3562
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-17T23:00:00.000Z",
        "engagementCount": 2621
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-17T23:00:00.000Z",
        "engagementCount": 2802
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-17T23:00:00.000Z",
        "engagementCount": 2774
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-17T23:00:00.000Z",
        "engagementCount": 1842
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-17T23:00:00.000Z",
        "engagementCount": 2088
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-18T23:00:00.000Z",
        "engagementCount": 1126
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-18T23:00:00.000Z",
        "engagementCount": 2014
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-18T23:00:00.000Z",
        "engagementCount": 2059
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-18T23:00:00.000Z",
        "engagementCount": 2397
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-18T23:00:00.000Z",
        "engagementCount": 2167
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-19T23:00:00.000Z",
        "engagementCount": 1549
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-19T23:00:00.000Z",
        "engagementCount": 1599
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-19T23:00:00.000Z",
        "engagementCount": 1552
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-19T23:00:00.000Z",
        "engagementCount": 2032
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-19T23:00:00.000Z",
        "engagementCount": 1945
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-20T23:00:00.000Z",
        "engagementCount": 1848
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-20T23:00:00.000Z",
        "engagementCount": 2785
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-20T23:00:00.000Z",
        "engagementCount": 1395
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-20T23:00:00.000Z",
        "engagementCount": 1508
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-20T23:00:00.000Z",
        "engagementCount": 1763
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-21T23:00:00.000Z",
        "engagementCount": 2337
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-21T23:00:00.000Z",
        "engagementCount": 2943
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-21T23:00:00.000Z",
        "engagementCount": 3277
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-21T23:00:00.000Z",
        "engagementCount": 2421
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-21T23:00:00.000Z",
        "engagementCount": 2959
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-22T23:00:00.000Z",
        "engagementCount": 2326
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-22T23:00:00.000Z",
        "engagementCount": 1362
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-22T23:00:00.000Z",
        "engagementCount": 2072
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-22T23:00:00.000Z",
        "engagementCount": 2936
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-22T23:00:00.000Z",
        "engagementCount": 3495
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-23T23:00:00.000Z",
        "engagementCount": 961
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-23T23:00:00.000Z",
        "engagementCount": 1760
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-23T23:00:00.000Z",
        "engagementCount": 1924
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-23T23:00:00.000Z",
        "engagementCount": 3556
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-23T23:00:00.000Z",
        "engagementCount": 2360
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-24T23:00:00.000Z",
        "engagementCount": 1685
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-24T23:00:00.000Z",
        "engagementCount": 1071
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-24T23:00:00.000Z",
        "engagementCount": 2115
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-24T23:00:00.000Z",
        "engagementCount": 2248
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-24T23:00:00.000Z",
        "engagementCount": 3090
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-25T23:00:00.000Z",
        "engagementCount": 1700
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-25T23:00:00.000Z",
        "engagementCount": 2780
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-25T23:00:00.000Z",
        "engagementCount": 1497
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-25T23:00:00.000Z",
        "engagementCount": 1664
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-25T23:00:00.000Z",
        "engagementCount": 2093
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-26T23:00:00.000Z",
        "engagementCount": 1172
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-26T23:00:00.000Z",
        "engagementCount": 1132
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-26T23:00:00.000Z",
        "engagementCount": 3033
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-26T23:00:00.000Z",
        "engagementCount": 1485
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-26T23:00:00.000Z",
        "engagementCount": 1770
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-27T23:00:00.000Z",
        "engagementCount": 942
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-27T23:00:00.000Z",
        "engagementCount": 1295
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-27T23:00:00.000Z",
        "engagementCount": 1514
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-27T23:00:00.000Z",
        "engagementCount": 2964
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-27T23:00:00.000Z",
        "engagementCount": 3308
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-28T23:00:00.000Z",
        "engagementCount": 2265
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-28T23:00:00.000Z",
        "engagementCount": 2907
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-28T23:00:00.000Z",
        "engagementCount": 2375
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-28T23:00:00.000Z",
        "engagementCount": 2214
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-28T23:00:00.000Z",
        "engagementCount": 2788
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-29T23:00:00.000Z",
        "engagementCount": 2010
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-29T23:00:00.000Z",
        "engagementCount": 2914
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-29T23:00:00.000Z",
        "engagementCount": 2075
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-29T23:00:00.000Z",
        "engagementCount": 2387
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-29T23:00:00.000Z",
        "engagementCount": 1807
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-05-31T23:00:00.000Z",
        "engagementCount": 2008
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-05-31T23:00:00.000Z",
        "engagementCount": 1204
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-05-31T23:00:00.000Z",
        "engagementCount": 3300
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-05-31T23:00:00.000Z",
        "engagementCount": 2893
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-05-31T23:00:00.000Z",
        "engagementCount": 1802
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-01T23:00:00.000Z",
        "engagementCount": 2431
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-01T23:00:00.000Z",
        "engagementCount": 1178
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-01T23:00:00.000Z",
        "engagementCount": 3383
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-01T23:00:00.000Z",
        "engagementCount": 3421
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-01T23:00:00.000Z",
        "engagementCount": 4315
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-02T23:00:00.000Z",
        "engagementCount": 2515
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-02T23:00:00.000Z",
        "engagementCount": 2826
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-02T23:00:00.000Z",
        "engagementCount": 2324
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-02T23:00:00.000Z",
        "engagementCount": 3655
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-02T23:00:00.000Z",
        "engagementCount": 1643
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-03T23:00:00.000Z",
        "engagementCount": 2693
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-03T23:00:00.000Z",
        "engagementCount": 2650
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-03T23:00:00.000Z",
        "engagementCount": 2811
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-03T23:00:00.000Z",
        "engagementCount": 3078
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-03T23:00:00.000Z",
        "engagementCount": 2860
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-04T23:00:00.000Z",
        "engagementCount": 1152
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-04T23:00:00.000Z",
        "engagementCount": 2896
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-04T23:00:00.000Z",
        "engagementCount": 3268
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-04T23:00:00.000Z",
        "engagementCount": 3781
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-04T23:00:00.000Z",
        "engagementCount": 3321
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-05T23:00:00.000Z",
        "engagementCount": 1106
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-05T23:00:00.000Z",
        "engagementCount": 3054
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-05T23:00:00.000Z",
        "engagementCount": 1768
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-05T23:00:00.000Z",
        "engagementCount": 2147
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-05T23:00:00.000Z",
        "engagementCount": 2120
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-06T23:00:00.000Z",
        "engagementCount": 2247
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-06T23:00:00.000Z",
        "engagementCount": 1832
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-06T23:00:00.000Z",
        "engagementCount": 3152
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-06T23:00:00.000Z",
        "engagementCount": 2009
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-06T23:00:00.000Z",
        "engagementCount": 2889
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-07T23:00:00.000Z",
        "engagementCount": 2497
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-07T23:00:00.000Z",
        "engagementCount": 2175
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-07T23:00:00.000Z",
        "engagementCount": 2086
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-07T23:00:00.000Z",
        "engagementCount": 1825
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-07T23:00:00.000Z",
        "engagementCount": 2218
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-08T23:00:00.000Z",
        "engagementCount": 1154
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-08T23:00:00.000Z",
        "engagementCount": 3230
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-08T23:00:00.000Z",
        "engagementCount": 2426
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-08T23:00:00.000Z",
        "engagementCount": 3436
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-08T23:00:00.000Z",
        "engagementCount": 1502
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-09T23:00:00.000Z",
        "engagementCount": 2671
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-09T23:00:00.000Z",
        "engagementCount": 1172
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-09T23:00:00.000Z",
        "engagementCount": 2110
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-09T23:00:00.000Z",
        "engagementCount": 2026
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-09T23:00:00.000Z",
        "engagementCount": 1994
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-10T23:00:00.000Z",
        "engagementCount": 973
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-10T23:00:00.000Z",
        "engagementCount": 1861
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-10T23:00:00.000Z",
        "engagementCount": 2786
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-10T23:00:00.000Z",
        "engagementCount": 2400
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-10T23:00:00.000Z",
        "engagementCount": 2318
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-11T23:00:00.000Z",
        "engagementCount": 1202
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-11T23:00:00.000Z",
        "engagementCount": 1946
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-11T23:00:00.000Z",
        "engagementCount": 1321
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-11T23:00:00.000Z",
        "engagementCount": 3664
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-11T23:00:00.000Z",
        "engagementCount": 1613
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-12T23:00:00.000Z",
        "engagementCount": 2772
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-12T23:00:00.000Z",
        "engagementCount": 2524
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-12T23:00:00.000Z",
        "engagementCount": 3594
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-12T23:00:00.000Z",
        "engagementCount": 3177
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-12T23:00:00.000Z",
        "engagementCount": 2269
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-13T23:00:00.000Z",
        "engagementCount": 2379
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-13T23:00:00.000Z",
        "engagementCount": 3141
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-13T23:00:00.000Z",
        "engagementCount": 1298
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-13T23:00:00.000Z",
        "engagementCount": 3336
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-13T23:00:00.000Z",
        "engagementCount": 3793
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-14T23:00:00.000Z",
        "engagementCount": 2126
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-14T23:00:00.000Z",
        "engagementCount": 3188
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-14T23:00:00.000Z",
        "engagementCount": 2105
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-14T23:00:00.000Z",
        "engagementCount": 1602
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-14T23:00:00.000Z",
        "engagementCount": 3875
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-15T23:00:00.000Z",
        "engagementCount": 1210
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-15T23:00:00.000Z",
        "engagementCount": 2738
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-15T23:00:00.000Z",
        "engagementCount": 1925
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-15T23:00:00.000Z",
        "engagementCount": 1553
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-15T23:00:00.000Z",
        "engagementCount": 2714
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-16T23:00:00.000Z",
        "engagementCount": 2284
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-16T23:00:00.000Z",
        "engagementCount": 2656
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-16T23:00:00.000Z",
        "engagementCount": 1291
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-16T23:00:00.000Z",
        "engagementCount": 3641
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-16T23:00:00.000Z",
        "engagementCount": 1856
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-17T23:00:00.000Z",
        "engagementCount": 1853
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-17T23:00:00.000Z",
        "engagementCount": 1970
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-17T23:00:00.000Z",
        "engagementCount": 3538
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-17T23:00:00.000Z",
        "engagementCount": 3909
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-17T23:00:00.000Z",
        "engagementCount": 1488
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-18T23:00:00.000Z",
        "engagementCount": 1347
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-18T23:00:00.000Z",
        "engagementCount": 3096
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-18T23:00:00.000Z",
        "engagementCount": 1937
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-18T23:00:00.000Z",
        "engagementCount": 3322
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-18T23:00:00.000Z",
        "engagementCount": 3502
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-19T23:00:00.000Z",
        "engagementCount": 2453
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-19T23:00:00.000Z",
        "engagementCount": 2438
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-19T23:00:00.000Z",
        "engagementCount": 3072
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-19T23:00:00.000Z",
        "engagementCount": 2426
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-19T23:00:00.000Z",
        "engagementCount": 1767
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-20T23:00:00.000Z",
        "engagementCount": 2713
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-20T23:00:00.000Z",
        "engagementCount": 1787
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-20T23:00:00.000Z",
        "engagementCount": 2225
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-20T23:00:00.000Z",
        "engagementCount": 2134
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-20T23:00:00.000Z",
        "engagementCount": 3133
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-21T23:00:00.000Z",
        "engagementCount": 1571
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-21T23:00:00.000Z",
        "engagementCount": 2371
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-21T23:00:00.000Z",
        "engagementCount": 3210
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-21T23:00:00.000Z",
        "engagementCount": 2541
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-21T23:00:00.000Z",
        "engagementCount": 3688
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-22T23:00:00.000Z",
        "engagementCount": 1369
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-22T23:00:00.000Z",
        "engagementCount": 2267
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-22T23:00:00.000Z",
        "engagementCount": 1921
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-22T23:00:00.000Z",
        "engagementCount": 2947
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-22T23:00:00.000Z",
        "engagementCount": 4188
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-23T23:00:00.000Z",
        "engagementCount": 2100
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-23T23:00:00.000Z",
        "engagementCount": 2298
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-23T23:00:00.000Z",
        "engagementCount": 3146
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-23T23:00:00.000Z",
        "engagementCount": 2738
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-23T23:00:00.000Z",
        "engagementCount": 1569
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-24T23:00:00.000Z",
        "engagementCount": 1744
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-24T23:00:00.000Z",
        "engagementCount": 2814
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-24T23:00:00.000Z",
        "engagementCount": 1236
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-24T23:00:00.000Z",
        "engagementCount": 2822
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-24T23:00:00.000Z",
        "engagementCount": 4033
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-25T23:00:00.000Z",
        "engagementCount": 2102
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-25T23:00:00.000Z",
        "engagementCount": 1523
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-25T23:00:00.000Z",
        "engagementCount": 3578
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-25T23:00:00.000Z",
        "engagementCount": 1822
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-25T23:00:00.000Z",
        "engagementCount": 3773
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-26T23:00:00.000Z",
        "engagementCount": 1756
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-26T23:00:00.000Z",
        "engagementCount": 1448
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-26T23:00:00.000Z",
        "engagementCount": 2858
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-26T23:00:00.000Z",
        "engagementCount": 3953
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-26T23:00:00.000Z",
        "engagementCount": 2428
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-27T23:00:00.000Z",
        "engagementCount": 1315
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-27T23:00:00.000Z",
        "engagementCount": 2903
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-27T23:00:00.000Z",
        "engagementCount": 1958
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-27T23:00:00.000Z",
        "engagementCount": 3703
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-27T23:00:00.000Z",
        "engagementCount": 3474
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-28T23:00:00.000Z",
        "engagementCount": 1062
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-28T23:00:00.000Z",
        "engagementCount": 1250
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-28T23:00:00.000Z",
        "engagementCount": 2392
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-28T23:00:00.000Z",
        "engagementCount": 1758
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-28T23:00:00.000Z",
        "engagementCount": 3883
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-29T23:00:00.000Z",
        "engagementCount": 1870
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-29T23:00:00.000Z",
        "engagementCount": 2787
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-29T23:00:00.000Z",
        "engagementCount": 1550
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-29T23:00:00.000Z",
        "engagementCount": 3864
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-29T23:00:00.000Z",
        "engagementCount": 3882
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 1902
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 3200
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 1230
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 2590
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 1859
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 1818
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 2283
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 2268
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 4197
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-06-30T23:00:00.000Z",
        "engagementCount": 2125
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-01T23:00:00.000Z",
        "engagementCount": 1991
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-01T23:00:00.000Z",
        "engagementCount": 3102
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-01T23:00:00.000Z",
        "engagementCount": 2863
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-01T23:00:00.000Z",
        "engagementCount": 3574
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-01T23:00:00.000Z",
        "engagementCount": 2726
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-02T23:00:00.000Z",
        "engagementCount": 1104
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-02T23:00:00.000Z",
        "engagementCount": 1753
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-02T23:00:00.000Z",
        "engagementCount": 3537
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-02T23:00:00.000Z",
        "engagementCount": 3773
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-02T23:00:00.000Z",
        "engagementCount": 1988
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-03T23:00:00.000Z",
        "engagementCount": 1565
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-03T23:00:00.000Z",
        "engagementCount": 1829
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-03T23:00:00.000Z",
        "engagementCount": 2637
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-03T23:00:00.000Z",
        "engagementCount": 1946
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-03T23:00:00.000Z",
        "engagementCount": 1982
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-04T23:00:00.000Z",
        "engagementCount": 1588
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-04T23:00:00.000Z",
        "engagementCount": 2353
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-04T23:00:00.000Z",
        "engagementCount": 3615
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-04T23:00:00.000Z",
        "engagementCount": 2198
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-04T23:00:00.000Z",
        "engagementCount": 3403
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-05T23:00:00.000Z",
        "engagementCount": 2333
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-05T23:00:00.000Z",
        "engagementCount": 1395
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-05T23:00:00.000Z",
        "engagementCount": 1714
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-05T23:00:00.000Z",
        "engagementCount": 3281
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-05T23:00:00.000Z",
        "engagementCount": 2867
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-06T23:00:00.000Z",
        "engagementCount": 2161
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-06T23:00:00.000Z",
        "engagementCount": 3502
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-06T23:00:00.000Z",
        "engagementCount": 3885
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-06T23:00:00.000Z",
        "engagementCount": 2121
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-06T23:00:00.000Z",
        "engagementCount": 3796
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-07T23:00:00.000Z",
        "engagementCount": 3029
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-07T23:00:00.000Z",
        "engagementCount": 2306
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-07T23:00:00.000Z",
        "engagementCount": 2496
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-07T23:00:00.000Z",
        "engagementCount": 4142
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-07T23:00:00.000Z",
        "engagementCount": 1725
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-08T23:00:00.000Z",
        "engagementCount": 1833
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-08T23:00:00.000Z",
        "engagementCount": 2277
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-08T23:00:00.000Z",
        "engagementCount": 2900
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-08T23:00:00.000Z",
        "engagementCount": 1823
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-08T23:00:00.000Z",
        "engagementCount": 2330
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-09T23:00:00.000Z",
        "engagementCount": 1711
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-09T23:00:00.000Z",
        "engagementCount": 2418
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-09T23:00:00.000Z",
        "engagementCount": 3399
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-09T23:00:00.000Z",
        "engagementCount": 1921
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-09T23:00:00.000Z",
        "engagementCount": 3329
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-10T23:00:00.000Z",
        "engagementCount": 2366
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-10T23:00:00.000Z",
        "engagementCount": 2917
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-10T23:00:00.000Z",
        "engagementCount": 3427
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-10T23:00:00.000Z",
        "engagementCount": 3720
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-10T23:00:00.000Z",
        "engagementCount": 4262
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-11T23:00:00.000Z",
        "engagementCount": 2626
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-11T23:00:00.000Z",
        "engagementCount": 1473
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-11T23:00:00.000Z",
        "engagementCount": 2465
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-11T23:00:00.000Z",
        "engagementCount": 2993
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-11T23:00:00.000Z",
        "engagementCount": 2231
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-12T23:00:00.000Z",
        "engagementCount": 2555
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-12T23:00:00.000Z",
        "engagementCount": 3271
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-12T23:00:00.000Z",
        "engagementCount": 3590
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-12T23:00:00.000Z",
        "engagementCount": 3670
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-12T23:00:00.000Z",
        "engagementCount": 3945
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-13T23:00:00.000Z",
        "engagementCount": 1481
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-13T23:00:00.000Z",
        "engagementCount": 3497
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-13T23:00:00.000Z",
        "engagementCount": 1755
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-13T23:00:00.000Z",
        "engagementCount": 2600
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-13T23:00:00.000Z",
        "engagementCount": 3721
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-14T23:00:00.000Z",
        "engagementCount": 1435
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-14T23:00:00.000Z",
        "engagementCount": 2218
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-14T23:00:00.000Z",
        "engagementCount": 3464
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-14T23:00:00.000Z",
        "engagementCount": 2575
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-14T23:00:00.000Z",
        "engagementCount": 3877
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-15T23:00:00.000Z",
        "engagementCount": 2836
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-15T23:00:00.000Z",
        "engagementCount": 2358
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-15T23:00:00.000Z",
        "engagementCount": 3854
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-15T23:00:00.000Z",
        "engagementCount": 4174
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-15T23:00:00.000Z",
        "engagementCount": 4323
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-16T23:00:00.000Z",
        "engagementCount": 2074
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-16T23:00:00.000Z",
        "engagementCount": 1254
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-16T23:00:00.000Z",
        "engagementCount": 1450
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-16T23:00:00.000Z",
        "engagementCount": 3696
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-16T23:00:00.000Z",
        "engagementCount": 2895
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-17T23:00:00.000Z",
        "engagementCount": 1857
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-17T23:00:00.000Z",
        "engagementCount": 1227
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-17T23:00:00.000Z",
        "engagementCount": 2255
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-17T23:00:00.000Z",
        "engagementCount": 3187
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-17T23:00:00.000Z",
        "engagementCount": 4131
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-18T23:00:00.000Z",
        "engagementCount": 1094
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-18T23:00:00.000Z",
        "engagementCount": 2886
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-18T23:00:00.000Z",
        "engagementCount": 1338
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-18T23:00:00.000Z",
        "engagementCount": 3923
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-18T23:00:00.000Z",
        "engagementCount": 2283
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-19T23:00:00.000Z",
        "engagementCount": 1850
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-19T23:00:00.000Z",
        "engagementCount": 2962
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-19T23:00:00.000Z",
        "engagementCount": 3824
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-19T23:00:00.000Z",
        "engagementCount": 3619
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-19T23:00:00.000Z",
        "engagementCount": 2864
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-20T23:00:00.000Z",
        "engagementCount": 2281
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-20T23:00:00.000Z",
        "engagementCount": 3125
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-20T23:00:00.000Z",
        "engagementCount": 3728
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-20T23:00:00.000Z",
        "engagementCount": 2795
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-20T23:00:00.000Z",
        "engagementCount": 4260
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-21T23:00:00.000Z",
        "engagementCount": 1771
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-21T23:00:00.000Z",
        "engagementCount": 1306
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-21T23:00:00.000Z",
        "engagementCount": 3436
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-21T23:00:00.000Z",
        "engagementCount": 2045
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-21T23:00:00.000Z",
        "engagementCount": 3915
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-22T23:00:00.000Z",
        "engagementCount": 2422
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-22T23:00:00.000Z",
        "engagementCount": 1530
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-22T23:00:00.000Z",
        "engagementCount": 3212
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-22T23:00:00.000Z",
        "engagementCount": 2512
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-22T23:00:00.000Z",
        "engagementCount": 2740
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-23T23:00:00.000Z",
        "engagementCount": 1271
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-23T23:00:00.000Z",
        "engagementCount": 2460
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-23T23:00:00.000Z",
        "engagementCount": 3499
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-23T23:00:00.000Z",
        "engagementCount": 2485
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-23T23:00:00.000Z",
        "engagementCount": 2853
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-24T23:00:00.000Z",
        "engagementCount": 2469
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-24T23:00:00.000Z",
        "engagementCount": 2552
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-24T23:00:00.000Z",
        "engagementCount": 3668
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-24T23:00:00.000Z",
        "engagementCount": 1694
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-24T23:00:00.000Z",
        "engagementCount": 2317
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-25T23:00:00.000Z",
        "engagementCount": 1418
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-25T23:00:00.000Z",
        "engagementCount": 3078
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-25T23:00:00.000Z",
        "engagementCount": 2629
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-25T23:00:00.000Z",
        "engagementCount": 1743
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-25T23:00:00.000Z",
        "engagementCount": 2603
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-26T23:00:00.000Z",
        "engagementCount": 1463
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-26T23:00:00.000Z",
        "engagementCount": 2509
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-26T23:00:00.000Z",
        "engagementCount": 3600
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-26T23:00:00.000Z",
        "engagementCount": 4286
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-26T23:00:00.000Z",
        "engagementCount": 2764
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-27T23:00:00.000Z",
        "engagementCount": 2340
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-27T23:00:00.000Z",
        "engagementCount": 1902
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-27T23:00:00.000Z",
        "engagementCount": 3090
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-27T23:00:00.000Z",
        "engagementCount": 2588
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-27T23:00:00.000Z",
        "engagementCount": 3393
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-28T23:00:00.000Z",
        "engagementCount": 2234
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-28T23:00:00.000Z",
        "engagementCount": 3092
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-28T23:00:00.000Z",
        "engagementCount": 2075
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-28T23:00:00.000Z",
        "engagementCount": 2869
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-28T23:00:00.000Z",
        "engagementCount": 3751
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-29T23:00:00.000Z",
        "engagementCount": 2881
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-29T23:00:00.000Z",
        "engagementCount": 1449
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-29T23:00:00.000Z",
        "engagementCount": 2236
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-29T23:00:00.000Z",
        "engagementCount": 2368
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-29T23:00:00.000Z",
        "engagementCount": 1941
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-07-31T23:00:00.000Z",
        "engagementCount": 2781
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-07-31T23:00:00.000Z",
        "engagementCount": 2084
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-07-31T23:00:00.000Z",
        "engagementCount": 1327
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-07-31T23:00:00.000Z",
        "engagementCount": 2246
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-07-31T23:00:00.000Z",
        "engagementCount": 2740
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-01T23:00:00.000Z",
        "engagementCount": 2083
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-01T23:00:00.000Z",
        "engagementCount": 2813
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-01T23:00:00.000Z",
        "engagementCount": 1851
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-01T23:00:00.000Z",
        "engagementCount": 3017
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-01T23:00:00.000Z",
        "engagementCount": 2875
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-02T23:00:00.000Z",
        "engagementCount": 2747
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-02T23:00:00.000Z",
        "engagementCount": 2522
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-02T23:00:00.000Z",
        "engagementCount": 3309
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-02T23:00:00.000Z",
        "engagementCount": 3948
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-02T23:00:00.000Z",
        "engagementCount": 4156
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-03T23:00:00.000Z",
        "engagementCount": 1490
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-03T23:00:00.000Z",
        "engagementCount": 3149
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-03T23:00:00.000Z",
        "engagementCount": 3538
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-03T23:00:00.000Z",
        "engagementCount": 1654
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-03T23:00:00.000Z",
        "engagementCount": 3565
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-04T23:00:00.000Z",
        "engagementCount": 2708
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-04T23:00:00.000Z",
        "engagementCount": 1469
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-04T23:00:00.000Z",
        "engagementCount": 1677
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-04T23:00:00.000Z",
        "engagementCount": 1657
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-04T23:00:00.000Z",
        "engagementCount": 3399
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-05T23:00:00.000Z",
        "engagementCount": 1971
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-05T23:00:00.000Z",
        "engagementCount": 3031
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-05T23:00:00.000Z",
        "engagementCount": 2572
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-05T23:00:00.000Z",
        "engagementCount": 2824
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-05T23:00:00.000Z",
        "engagementCount": 1535
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-06T23:00:00.000Z",
        "engagementCount": 2243
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-06T23:00:00.000Z",
        "engagementCount": 1383
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-06T23:00:00.000Z",
        "engagementCount": 1438
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-06T23:00:00.000Z",
        "engagementCount": 3370
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-06T23:00:00.000Z",
        "engagementCount": 3399
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-07T23:00:00.000Z",
        "engagementCount": 1481
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-07T23:00:00.000Z",
        "engagementCount": 1681
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-07T23:00:00.000Z",
        "engagementCount": 3227
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-07T23:00:00.000Z",
        "engagementCount": 3439
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-07T23:00:00.000Z",
        "engagementCount": 3597
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-08T23:00:00.000Z",
        "engagementCount": 1764
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-08T23:00:00.000Z",
        "engagementCount": 2872
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-08T23:00:00.000Z",
        "engagementCount": 2606
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-08T23:00:00.000Z",
        "engagementCount": 2770
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-08T23:00:00.000Z",
        "engagementCount": 4160
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-09T23:00:00.000Z",
        "engagementCount": 1668
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-09T23:00:00.000Z",
        "engagementCount": 2177
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-09T23:00:00.000Z",
        "engagementCount": 1370
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-09T23:00:00.000Z",
        "engagementCount": 2365
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-09T23:00:00.000Z",
        "engagementCount": 3552
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-10T23:00:00.000Z",
        "engagementCount": 2446
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-10T23:00:00.000Z",
        "engagementCount": 3119
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-10T23:00:00.000Z",
        "engagementCount": 2950
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-10T23:00:00.000Z",
        "engagementCount": 3282
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-10T23:00:00.000Z",
        "engagementCount": 3296
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-11T23:00:00.000Z",
        "engagementCount": 1770
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-11T23:00:00.000Z",
        "engagementCount": 1764
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-11T23:00:00.000Z",
        "engagementCount": 2357
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-11T23:00:00.000Z",
        "engagementCount": 1903
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-11T23:00:00.000Z",
        "engagementCount": 4131
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-12T23:00:00.000Z",
        "engagementCount": 2832
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-12T23:00:00.000Z",
        "engagementCount": 3177
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-12T23:00:00.000Z",
        "engagementCount": 2930
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-12T23:00:00.000Z",
        "engagementCount": 3555
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-12T23:00:00.000Z",
        "engagementCount": 2132
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-13T23:00:00.000Z",
        "engagementCount": 1661
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-13T23:00:00.000Z",
        "engagementCount": 2997
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-13T23:00:00.000Z",
        "engagementCount": 1787
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-13T23:00:00.000Z",
        "engagementCount": 2983
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-13T23:00:00.000Z",
        "engagementCount": 2466
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-14T23:00:00.000Z",
        "engagementCount": 1673
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-14T23:00:00.000Z",
        "engagementCount": 2852
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-14T23:00:00.000Z",
        "engagementCount": 1422
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-14T23:00:00.000Z",
        "engagementCount": 2602
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-14T23:00:00.000Z",
        "engagementCount": 2548
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-15T23:00:00.000Z",
        "engagementCount": 1636
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-15T23:00:00.000Z",
        "engagementCount": 1550
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-15T23:00:00.000Z",
        "engagementCount": 2176
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-15T23:00:00.000Z",
        "engagementCount": 1482
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-15T23:00:00.000Z",
        "engagementCount": 1894
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-16T23:00:00.000Z",
        "engagementCount": 1063
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-16T23:00:00.000Z",
        "engagementCount": 2632
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-16T23:00:00.000Z",
        "engagementCount": 3594
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-16T23:00:00.000Z",
        "engagementCount": 1501
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-16T23:00:00.000Z",
        "engagementCount": 3601
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-17T23:00:00.000Z",
        "engagementCount": 2006
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-17T23:00:00.000Z",
        "engagementCount": 2157
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-17T23:00:00.000Z",
        "engagementCount": 2300
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-17T23:00:00.000Z",
        "engagementCount": 2879
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-17T23:00:00.000Z",
        "engagementCount": 1716
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-18T23:00:00.000Z",
        "engagementCount": 1767
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-18T23:00:00.000Z",
        "engagementCount": 2980
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-18T23:00:00.000Z",
        "engagementCount": 2080
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-18T23:00:00.000Z",
        "engagementCount": 2016
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-18T23:00:00.000Z",
        "engagementCount": 3835
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-19T23:00:00.000Z",
        "engagementCount": 2450
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-19T23:00:00.000Z",
        "engagementCount": 2079
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-19T23:00:00.000Z",
        "engagementCount": 1780
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-19T23:00:00.000Z",
        "engagementCount": 2693
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-19T23:00:00.000Z",
        "engagementCount": 4159
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-20T23:00:00.000Z",
        "engagementCount": 1115
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-20T23:00:00.000Z",
        "engagementCount": 1613
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-20T23:00:00.000Z",
        "engagementCount": 3340
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-20T23:00:00.000Z",
        "engagementCount": 2474
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-20T23:00:00.000Z",
        "engagementCount": 3236
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-21T23:00:00.000Z",
        "engagementCount": 2181
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-21T23:00:00.000Z",
        "engagementCount": 2106
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-21T23:00:00.000Z",
        "engagementCount": 1206
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-21T23:00:00.000Z",
        "engagementCount": 3012
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-21T23:00:00.000Z",
        "engagementCount": 3060
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-22T23:00:00.000Z",
        "engagementCount": 2028
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-22T23:00:00.000Z",
        "engagementCount": 1349
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-22T23:00:00.000Z",
        "engagementCount": 2835
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-22T23:00:00.000Z",
        "engagementCount": 3495
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-22T23:00:00.000Z",
        "engagementCount": 2712
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-23T23:00:00.000Z",
        "engagementCount": 2754
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-23T23:00:00.000Z",
        "engagementCount": 2363
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-23T23:00:00.000Z",
        "engagementCount": 1682
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-23T23:00:00.000Z",
        "engagementCount": 3556
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-23T23:00:00.000Z",
        "engagementCount": 3335
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-24T23:00:00.000Z",
        "engagementCount": 1941
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-24T23:00:00.000Z",
        "engagementCount": 1954
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-24T23:00:00.000Z",
        "engagementCount": 2071
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-24T23:00:00.000Z",
        "engagementCount": 2307
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-24T23:00:00.000Z",
        "engagementCount": 2401
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-25T23:00:00.000Z",
        "engagementCount": 2742
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-25T23:00:00.000Z",
        "engagementCount": 2790
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-25T23:00:00.000Z",
        "engagementCount": 2356
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-25T23:00:00.000Z",
        "engagementCount": 2697
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-25T23:00:00.000Z",
        "engagementCount": 2212
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-26T23:00:00.000Z",
        "engagementCount": 2740
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-26T23:00:00.000Z",
        "engagementCount": 3031
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-26T23:00:00.000Z",
        "engagementCount": 3408
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-26T23:00:00.000Z",
        "engagementCount": 2791
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-26T23:00:00.000Z",
        "engagementCount": 2479
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-27T23:00:00.000Z",
        "engagementCount": 2413
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-27T23:00:00.000Z",
        "engagementCount": 2927
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-27T23:00:00.000Z",
        "engagementCount": 2225
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-27T23:00:00.000Z",
        "engagementCount": 2308
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-27T23:00:00.000Z",
        "engagementCount": 2630
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-28T23:00:00.000Z",
        "engagementCount": 1994
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-28T23:00:00.000Z",
        "engagementCount": 3199
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-28T23:00:00.000Z",
        "engagementCount": 1306
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-28T23:00:00.000Z",
        "engagementCount": 1988
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-28T23:00:00.000Z",
        "engagementCount": 2552
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-29T23:00:00.000Z",
        "engagementCount": 2512
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-29T23:00:00.000Z",
        "engagementCount": 2670
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-29T23:00:00.000Z",
        "engagementCount": 1996
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-29T23:00:00.000Z",
        "engagementCount": 3120
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-29T23:00:00.000Z",
        "engagementCount": 3440
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-30T23:00:00.000Z",
        "engagementCount": 2480
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-30T23:00:00.000Z",
        "engagementCount": 1121
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-30T23:00:00.000Z",
        "engagementCount": 2561
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-30T23:00:00.000Z",
        "engagementCount": 3618
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-30T23:00:00.000Z",
        "engagementCount": 4093
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-08-31T23:00:00.000Z",
        "engagementCount": 2477
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-08-31T23:00:00.000Z",
        "engagementCount": 2504
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-08-31T23:00:00.000Z",
        "engagementCount": 2144
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-08-31T23:00:00.000Z",
        "engagementCount": 2450
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-08-31T23:00:00.000Z",
        "engagementCount": 2744
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-01T23:00:00.000Z",
        "engagementCount": 2454
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-01T23:00:00.000Z",
        "engagementCount": 2344
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-01T23:00:00.000Z",
        "engagementCount": 1137
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-01T23:00:00.000Z",
        "engagementCount": 3310
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-01T23:00:00.000Z",
        "engagementCount": 1739
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-02T23:00:00.000Z",
        "engagementCount": 993
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-02T23:00:00.000Z",
        "engagementCount": 1920
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-02T23:00:00.000Z",
        "engagementCount": 1233
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-02T23:00:00.000Z",
        "engagementCount": 1437
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-02T23:00:00.000Z",
        "engagementCount": 3937
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-03T23:00:00.000Z",
        "engagementCount": 2490
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-03T23:00:00.000Z",
        "engagementCount": 1618
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-03T23:00:00.000Z",
        "engagementCount": 3156
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-03T23:00:00.000Z",
        "engagementCount": 2067
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-03T23:00:00.000Z",
        "engagementCount": 1448
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-04T23:00:00.000Z",
        "engagementCount": 1110
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-04T23:00:00.000Z",
        "engagementCount": 1735
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-04T23:00:00.000Z",
        "engagementCount": 1672
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-04T23:00:00.000Z",
        "engagementCount": 2633
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-04T23:00:00.000Z",
        "engagementCount": 3695
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-05T23:00:00.000Z",
        "engagementCount": 2364
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-05T23:00:00.000Z",
        "engagementCount": 2428
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-05T23:00:00.000Z",
        "engagementCount": 3207
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-05T23:00:00.000Z",
        "engagementCount": 2596
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-05T23:00:00.000Z",
        "engagementCount": 1625
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-06T23:00:00.000Z",
        "engagementCount": 1107
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-06T23:00:00.000Z",
        "engagementCount": 1048
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-06T23:00:00.000Z",
        "engagementCount": 2217
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-06T23:00:00.000Z",
        "engagementCount": 3618
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-06T23:00:00.000Z",
        "engagementCount": 1387
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-07T23:00:00.000Z",
        "engagementCount": 1427
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-07T23:00:00.000Z",
        "engagementCount": 2834
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-07T23:00:00.000Z",
        "engagementCount": 1989
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-07T23:00:00.000Z",
        "engagementCount": 2845
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-07T23:00:00.000Z",
        "engagementCount": 1545
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-08T23:00:00.000Z",
        "engagementCount": 1353
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-08T23:00:00.000Z",
        "engagementCount": 2959
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-08T23:00:00.000Z",
        "engagementCount": 3295
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-08T23:00:00.000Z",
        "engagementCount": 3322
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-08T23:00:00.000Z",
        "engagementCount": 3245
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-09T23:00:00.000Z",
        "engagementCount": 1550
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-09T23:00:00.000Z",
        "engagementCount": 1248
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-09T23:00:00.000Z",
        "engagementCount": 3108
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-09T23:00:00.000Z",
        "engagementCount": 2624
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-09T23:00:00.000Z",
        "engagementCount": 1914
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-10T23:00:00.000Z",
        "engagementCount": 1039
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-10T23:00:00.000Z",
        "engagementCount": 1835
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-10T23:00:00.000Z",
        "engagementCount": 2960
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-10T23:00:00.000Z",
        "engagementCount": 2554
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-10T23:00:00.000Z",
        "engagementCount": 1627
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-11T23:00:00.000Z",
        "engagementCount": 1764
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-11T23:00:00.000Z",
        "engagementCount": 1911
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-11T23:00:00.000Z",
        "engagementCount": 2000
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-11T23:00:00.000Z",
        "engagementCount": 1901
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-11T23:00:00.000Z",
        "engagementCount": 2973
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-12T23:00:00.000Z",
        "engagementCount": 2251
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-12T23:00:00.000Z",
        "engagementCount": 1864
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-12T23:00:00.000Z",
        "engagementCount": 2651
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-12T23:00:00.000Z",
        "engagementCount": 3278
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-12T23:00:00.000Z",
        "engagementCount": 1537
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-13T23:00:00.000Z",
        "engagementCount": 1030
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-13T23:00:00.000Z",
        "engagementCount": 2740
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-13T23:00:00.000Z",
        "engagementCount": 2528
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-13T23:00:00.000Z",
        "engagementCount": 3208
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-13T23:00:00.000Z",
        "engagementCount": 3364
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-14T23:00:00.000Z",
        "engagementCount": 2472
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-14T23:00:00.000Z",
        "engagementCount": 1086
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-14T23:00:00.000Z",
        "engagementCount": 3210
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-14T23:00:00.000Z",
        "engagementCount": 3194
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-14T23:00:00.000Z",
        "engagementCount": 2053
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-15T23:00:00.000Z",
        "engagementCount": 1776
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-15T23:00:00.000Z",
        "engagementCount": 2946
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-15T23:00:00.000Z",
        "engagementCount": 1881
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-15T23:00:00.000Z",
        "engagementCount": 1533
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-15T23:00:00.000Z",
        "engagementCount": 2126
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-16T23:00:00.000Z",
        "engagementCount": 2321
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-16T23:00:00.000Z",
        "engagementCount": 2099
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-16T23:00:00.000Z",
        "engagementCount": 1707
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-16T23:00:00.000Z",
        "engagementCount": 2290
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-16T23:00:00.000Z",
        "engagementCount": 2506
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-17T23:00:00.000Z",
        "engagementCount": 1839
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-17T23:00:00.000Z",
        "engagementCount": 2421
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-17T23:00:00.000Z",
        "engagementCount": 2772
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-17T23:00:00.000Z",
        "engagementCount": 3282
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-17T23:00:00.000Z",
        "engagementCount": 2053
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-18T23:00:00.000Z",
        "engagementCount": 1830
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-18T23:00:00.000Z",
        "engagementCount": 1423
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-18T23:00:00.000Z",
        "engagementCount": 3096
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-18T23:00:00.000Z",
        "engagementCount": 1576
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-18T23:00:00.000Z",
        "engagementCount": 3305
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-19T23:00:00.000Z",
        "engagementCount": 1264
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-19T23:00:00.000Z",
        "engagementCount": 1685
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-19T23:00:00.000Z",
        "engagementCount": 2336
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-19T23:00:00.000Z",
        "engagementCount": 2222
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-19T23:00:00.000Z",
        "engagementCount": 1453
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-20T23:00:00.000Z",
        "engagementCount": 2032
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-20T23:00:00.000Z",
        "engagementCount": 1415
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-20T23:00:00.000Z",
        "engagementCount": 3121
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-20T23:00:00.000Z",
        "engagementCount": 1636
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-20T23:00:00.000Z",
        "engagementCount": 1654
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-21T23:00:00.000Z",
        "engagementCount": 1471
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-21T23:00:00.000Z",
        "engagementCount": 2737
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-21T23:00:00.000Z",
        "engagementCount": 1868
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-21T23:00:00.000Z",
        "engagementCount": 3401
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-21T23:00:00.000Z",
        "engagementCount": 1378
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-22T23:00:00.000Z",
        "engagementCount": 1672
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-22T23:00:00.000Z",
        "engagementCount": 1712
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-22T23:00:00.000Z",
        "engagementCount": 2412
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-22T23:00:00.000Z",
        "engagementCount": 1697
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-22T23:00:00.000Z",
        "engagementCount": 2350
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-23T23:00:00.000Z",
        "engagementCount": 1937
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-23T23:00:00.000Z",
        "engagementCount": 2712
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-23T23:00:00.000Z",
        "engagementCount": 2085
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-23T23:00:00.000Z",
        "engagementCount": 1933
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-23T23:00:00.000Z",
        "engagementCount": 1665
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-24T23:00:00.000Z",
        "engagementCount": 1376
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-24T23:00:00.000Z",
        "engagementCount": 1753
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-24T23:00:00.000Z",
        "engagementCount": 2545
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-24T23:00:00.000Z",
        "engagementCount": 2187
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-24T23:00:00.000Z",
        "engagementCount": 2517
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-25T23:00:00.000Z",
        "engagementCount": 1579
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-25T23:00:00.000Z",
        "engagementCount": 1623
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-25T23:00:00.000Z",
        "engagementCount": 3169
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-25T23:00:00.000Z",
        "engagementCount": 3050
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-25T23:00:00.000Z",
        "engagementCount": 2409
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-26T23:00:00.000Z",
        "engagementCount": 2150
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-26T23:00:00.000Z",
        "engagementCount": 1526
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-26T23:00:00.000Z",
        "engagementCount": 2257
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-26T23:00:00.000Z",
        "engagementCount": 1476
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-26T23:00:00.000Z",
        "engagementCount": 3642
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-27T23:00:00.000Z",
        "engagementCount": 2067
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-27T23:00:00.000Z",
        "engagementCount": 2873
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-27T23:00:00.000Z",
        "engagementCount": 1193
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-27T23:00:00.000Z",
        "engagementCount": 1503
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-27T23:00:00.000Z",
        "engagementCount": 1467
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-28T23:00:00.000Z",
        "engagementCount": 1138
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-28T23:00:00.000Z",
        "engagementCount": 2509
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-28T23:00:00.000Z",
        "engagementCount": 2438
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-28T23:00:00.000Z",
        "engagementCount": 1640
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-28T23:00:00.000Z",
        "engagementCount": 1577
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-29T23:00:00.000Z",
        "engagementCount": 2435
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-29T23:00:00.000Z",
        "engagementCount": 1278
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-29T23:00:00.000Z",
        "engagementCount": 1171
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-29T23:00:00.000Z",
        "engagementCount": 2226
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-29T23:00:00.000Z",
        "engagementCount": 3261
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 978
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 2344
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 2398
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 2761
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 1437
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 2203
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 2045
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 1278
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 2445
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-09-30T23:00:00.000Z",
        "engagementCount": 1757
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-01T23:00:00.000Z",
        "engagementCount": 1335
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-01T23:00:00.000Z",
        "engagementCount": 1884
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-01T23:00:00.000Z",
        "engagementCount": 1425
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-01T23:00:00.000Z",
        "engagementCount": 2724
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-01T23:00:00.000Z",
        "engagementCount": 2615
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-02T23:00:00.000Z",
        "engagementCount": 1934
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-02T23:00:00.000Z",
        "engagementCount": 2015
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-02T23:00:00.000Z",
        "engagementCount": 1739
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-02T23:00:00.000Z",
        "engagementCount": 2499
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-02T23:00:00.000Z",
        "engagementCount": 2182
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-03T23:00:00.000Z",
        "engagementCount": 978
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-03T23:00:00.000Z",
        "engagementCount": 974
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-03T23:00:00.000Z",
        "engagementCount": 1226
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-03T23:00:00.000Z",
        "engagementCount": 1362
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-03T23:00:00.000Z",
        "engagementCount": 2500
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-04T23:00:00.000Z",
        "engagementCount": 936
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-04T23:00:00.000Z",
        "engagementCount": 2069
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-04T23:00:00.000Z",
        "engagementCount": 1438
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-04T23:00:00.000Z",
        "engagementCount": 2903
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-04T23:00:00.000Z",
        "engagementCount": 2709
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-05T23:00:00.000Z",
        "engagementCount": 926
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-05T23:00:00.000Z",
        "engagementCount": 1011
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-05T23:00:00.000Z",
        "engagementCount": 2226
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-05T23:00:00.000Z",
        "engagementCount": 2666
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-05T23:00:00.000Z",
        "engagementCount": 3404
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-06T23:00:00.000Z",
        "engagementCount": 1132
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-06T23:00:00.000Z",
        "engagementCount": 1545
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-06T23:00:00.000Z",
        "engagementCount": 1832
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-06T23:00:00.000Z",
        "engagementCount": 3072
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-06T23:00:00.000Z",
        "engagementCount": 3508
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-07T23:00:00.000Z",
        "engagementCount": 955
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-07T23:00:00.000Z",
        "engagementCount": 1266
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-07T23:00:00.000Z",
        "engagementCount": 2276
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-07T23:00:00.000Z",
        "engagementCount": 2885
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-07T23:00:00.000Z",
        "engagementCount": 2943
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-08T23:00:00.000Z",
        "engagementCount": 1000
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-08T23:00:00.000Z",
        "engagementCount": 991
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-08T23:00:00.000Z",
        "engagementCount": 1213
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-08T23:00:00.000Z",
        "engagementCount": 1922
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-08T23:00:00.000Z",
        "engagementCount": 3023
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-09T23:00:00.000Z",
        "engagementCount": 1161
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-09T23:00:00.000Z",
        "engagementCount": 2651
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-09T23:00:00.000Z",
        "engagementCount": 2042
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-09T23:00:00.000Z",
        "engagementCount": 2472
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-09T23:00:00.000Z",
        "engagementCount": 3032
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-10T23:00:00.000Z",
        "engagementCount": 2180
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-10T23:00:00.000Z",
        "engagementCount": 2031
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-10T23:00:00.000Z",
        "engagementCount": 2989
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-10T23:00:00.000Z",
        "engagementCount": 2007
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-10T23:00:00.000Z",
        "engagementCount": 1730
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-11T23:00:00.000Z",
        "engagementCount": 2370
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-11T23:00:00.000Z",
        "engagementCount": 1417
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-11T23:00:00.000Z",
        "engagementCount": 2270
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-11T23:00:00.000Z",
        "engagementCount": 2020
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-11T23:00:00.000Z",
        "engagementCount": 1313
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-12T23:00:00.000Z",
        "engagementCount": 1451
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-12T23:00:00.000Z",
        "engagementCount": 2219
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-12T23:00:00.000Z",
        "engagementCount": 1888
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-12T23:00:00.000Z",
        "engagementCount": 2626
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-12T23:00:00.000Z",
        "engagementCount": 1659
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-13T23:00:00.000Z",
        "engagementCount": 1332
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-13T23:00:00.000Z",
        "engagementCount": 1667
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-13T23:00:00.000Z",
        "engagementCount": 1340
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-13T23:00:00.000Z",
        "engagementCount": 1980
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-13T23:00:00.000Z",
        "engagementCount": 3119
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-14T23:00:00.000Z",
        "engagementCount": 1787
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-14T23:00:00.000Z",
        "engagementCount": 1614
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-14T23:00:00.000Z",
        "engagementCount": 2360
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-14T23:00:00.000Z",
        "engagementCount": 1401
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-14T23:00:00.000Z",
        "engagementCount": 2354
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-15T23:00:00.000Z",
        "engagementCount": 2347
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-15T23:00:00.000Z",
        "engagementCount": 2295
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-15T23:00:00.000Z",
        "engagementCount": 2090
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-15T23:00:00.000Z",
        "engagementCount": 2104
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-15T23:00:00.000Z",
        "engagementCount": 2680
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-16T23:00:00.000Z",
        "engagementCount": 986
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-16T23:00:00.000Z",
        "engagementCount": 1754
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-16T23:00:00.000Z",
        "engagementCount": 2728
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-16T23:00:00.000Z",
        "engagementCount": 1847
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-16T23:00:00.000Z",
        "engagementCount": 1545
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-17T23:00:00.000Z",
        "engagementCount": 1726
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-17T23:00:00.000Z",
        "engagementCount": 1388
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-17T23:00:00.000Z",
        "engagementCount": 2961
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-17T23:00:00.000Z",
        "engagementCount": 2728
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-17T23:00:00.000Z",
        "engagementCount": 3161
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-18T23:00:00.000Z",
        "engagementCount": 2171
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-18T23:00:00.000Z",
        "engagementCount": 1067
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-18T23:00:00.000Z",
        "engagementCount": 1668
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-18T23:00:00.000Z",
        "engagementCount": 2469
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-18T23:00:00.000Z",
        "engagementCount": 2707
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-19T23:00:00.000Z",
        "engagementCount": 1353
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-19T23:00:00.000Z",
        "engagementCount": 1337
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-19T23:00:00.000Z",
        "engagementCount": 2073
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-19T23:00:00.000Z",
        "engagementCount": 1670
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-19T23:00:00.000Z",
        "engagementCount": 2147
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-20T23:00:00.000Z",
        "engagementCount": 1644
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-20T23:00:00.000Z",
        "engagementCount": 1417
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-20T23:00:00.000Z",
        "engagementCount": 1173
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-20T23:00:00.000Z",
        "engagementCount": 1637
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-20T23:00:00.000Z",
        "engagementCount": 2301
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-21T23:00:00.000Z",
        "engagementCount": 1288
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-21T23:00:00.000Z",
        "engagementCount": 1403
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-21T23:00:00.000Z",
        "engagementCount": 1889
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-21T23:00:00.000Z",
        "engagementCount": 2002
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-21T23:00:00.000Z",
        "engagementCount": 1513
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-22T23:00:00.000Z",
        "engagementCount": 1333
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-22T23:00:00.000Z",
        "engagementCount": 2626
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-22T23:00:00.000Z",
        "engagementCount": 1466
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-22T23:00:00.000Z",
        "engagementCount": 1295
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-22T23:00:00.000Z",
        "engagementCount": 3225
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-23T23:00:00.000Z",
        "engagementCount": 1042
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-23T23:00:00.000Z",
        "engagementCount": 967
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-23T23:00:00.000Z",
        "engagementCount": 1666
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-23T23:00:00.000Z",
        "engagementCount": 2443
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-23T23:00:00.000Z",
        "engagementCount": 3385
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-24T23:00:00.000Z",
        "engagementCount": 865
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-24T23:00:00.000Z",
        "engagementCount": 1774
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-24T23:00:00.000Z",
        "engagementCount": 2956
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-24T23:00:00.000Z",
        "engagementCount": 2422
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-24T23:00:00.000Z",
        "engagementCount": 2873
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-25T23:00:00.000Z",
        "engagementCount": 1708
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-25T23:00:00.000Z",
        "engagementCount": 2204
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-25T23:00:00.000Z",
        "engagementCount": 2872
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-25T23:00:00.000Z",
        "engagementCount": 1464
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-25T23:00:00.000Z",
        "engagementCount": 3173
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-26T23:00:00.000Z",
        "engagementCount": 1267
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-26T23:00:00.000Z",
        "engagementCount": 2179
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-26T23:00:00.000Z",
        "engagementCount": 2732
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-26T23:00:00.000Z",
        "engagementCount": 3271
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-26T23:00:00.000Z",
        "engagementCount": 1836
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-27T23:00:00.000Z",
        "engagementCount": 1252
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-27T23:00:00.000Z",
        "engagementCount": 1468
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-27T23:00:00.000Z",
        "engagementCount": 2941
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-27T23:00:00.000Z",
        "engagementCount": 1686
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-27T23:00:00.000Z",
        "engagementCount": 1214
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-28T23:00:00.000Z",
        "engagementCount": 2377
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-28T23:00:00.000Z",
        "engagementCount": 997
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-28T23:00:00.000Z",
        "engagementCount": 2916
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-28T23:00:00.000Z",
        "engagementCount": 2170
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-28T23:00:00.000Z",
        "engagementCount": 3337
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-10-29T23:00:00.000Z",
        "engagementCount": 1985
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-10-29T23:00:00.000Z",
        "engagementCount": 1558
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-10-29T23:00:00.000Z",
        "engagementCount": 2400
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-10-29T23:00:00.000Z",
        "engagementCount": 1887
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-10-29T23:00:00.000Z",
        "engagementCount": 1501
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-01T00:00:00.000Z",
        "engagementCount": 1300
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-01T00:00:00.000Z",
        "engagementCount": 1824
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-01T00:00:00.000Z",
        "engagementCount": 1527
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-01T00:00:00.000Z",
        "engagementCount": 1631
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-01T00:00:00.000Z",
        "engagementCount": 1121
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-02T00:00:00.000Z",
        "engagementCount": 2003
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-02T00:00:00.000Z",
        "engagementCount": 1542
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-02T00:00:00.000Z",
        "engagementCount": 1826
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-02T00:00:00.000Z",
        "engagementCount": 2948
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-02T00:00:00.000Z",
        "engagementCount": 1317
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-03T00:00:00.000Z",
        "engagementCount": 815
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-03T00:00:00.000Z",
        "engagementCount": 1235
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-03T00:00:00.000Z",
        "engagementCount": 2687
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-03T00:00:00.000Z",
        "engagementCount": 2449
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-03T00:00:00.000Z",
        "engagementCount": 2571
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-04T00:00:00.000Z",
        "engagementCount": 1812
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-04T00:00:00.000Z",
        "engagementCount": 1156
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-04T00:00:00.000Z",
        "engagementCount": 1540
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-04T00:00:00.000Z",
        "engagementCount": 2367
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-04T00:00:00.000Z",
        "engagementCount": 1626
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-05T00:00:00.000Z",
        "engagementCount": 1123
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-05T00:00:00.000Z",
        "engagementCount": 857
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-05T00:00:00.000Z",
        "engagementCount": 2672
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-05T00:00:00.000Z",
        "engagementCount": 2475
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-05T00:00:00.000Z",
        "engagementCount": 2014
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-06T00:00:00.000Z",
        "engagementCount": 871
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-06T00:00:00.000Z",
        "engagementCount": 2082
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-06T00:00:00.000Z",
        "engagementCount": 2528
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-06T00:00:00.000Z",
        "engagementCount": 2703
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-06T00:00:00.000Z",
        "engagementCount": 2541
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-07T00:00:00.000Z",
        "engagementCount": 1854
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-07T00:00:00.000Z",
        "engagementCount": 1425
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-07T00:00:00.000Z",
        "engagementCount": 2690
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-07T00:00:00.000Z",
        "engagementCount": 1653
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-07T00:00:00.000Z",
        "engagementCount": 2337
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-08T00:00:00.000Z",
        "engagementCount": 875
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-08T00:00:00.000Z",
        "engagementCount": 2132
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-08T00:00:00.000Z",
        "engagementCount": 1421
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-08T00:00:00.000Z",
        "engagementCount": 2386
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-08T00:00:00.000Z",
        "engagementCount": 3065
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-09T00:00:00.000Z",
        "engagementCount": 1601
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-09T00:00:00.000Z",
        "engagementCount": 930
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-09T00:00:00.000Z",
        "engagementCount": 1147
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-09T00:00:00.000Z",
        "engagementCount": 2846
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-09T00:00:00.000Z",
        "engagementCount": 2166
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-10T00:00:00.000Z",
        "engagementCount": 1307
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-10T00:00:00.000Z",
        "engagementCount": 1440
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-10T00:00:00.000Z",
        "engagementCount": 2108
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-10T00:00:00.000Z",
        "engagementCount": 2511
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-10T00:00:00.000Z",
        "engagementCount": 1355
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-11T00:00:00.000Z",
        "engagementCount": 1173
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-11T00:00:00.000Z",
        "engagementCount": 1098
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-11T00:00:00.000Z",
        "engagementCount": 2656
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-11T00:00:00.000Z",
        "engagementCount": 1337
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-11T00:00:00.000Z",
        "engagementCount": 2198
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-12T00:00:00.000Z",
        "engagementCount": 896
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-12T00:00:00.000Z",
        "engagementCount": 2167
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-12T00:00:00.000Z",
        "engagementCount": 2687
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-12T00:00:00.000Z",
        "engagementCount": 1952
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-12T00:00:00.000Z",
        "engagementCount": 3223
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-13T00:00:00.000Z",
        "engagementCount": 1014
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-13T00:00:00.000Z",
        "engagementCount": 1575
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-13T00:00:00.000Z",
        "engagementCount": 1369
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-13T00:00:00.000Z",
        "engagementCount": 1389
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-13T00:00:00.000Z",
        "engagementCount": 1767
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-14T00:00:00.000Z",
        "engagementCount": 2011
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-14T00:00:00.000Z",
        "engagementCount": 1716
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-14T00:00:00.000Z",
        "engagementCount": 2390
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-14T00:00:00.000Z",
        "engagementCount": 1033
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-14T00:00:00.000Z",
        "engagementCount": 1842
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-15T00:00:00.000Z",
        "engagementCount": 827
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-15T00:00:00.000Z",
        "engagementCount": 1642
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-15T00:00:00.000Z",
        "engagementCount": 2167
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-15T00:00:00.000Z",
        "engagementCount": 2574
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-15T00:00:00.000Z",
        "engagementCount": 2093
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-16T00:00:00.000Z",
        "engagementCount": 1264
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-16T00:00:00.000Z",
        "engagementCount": 1170
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-16T00:00:00.000Z",
        "engagementCount": 1559
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-16T00:00:00.000Z",
        "engagementCount": 2024
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-16T00:00:00.000Z",
        "engagementCount": 1613
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-17T00:00:00.000Z",
        "engagementCount": 1368
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-17T00:00:00.000Z",
        "engagementCount": 2347
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-17T00:00:00.000Z",
        "engagementCount": 2534
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-17T00:00:00.000Z",
        "engagementCount": 1880
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-17T00:00:00.000Z",
        "engagementCount": 2716
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-18T00:00:00.000Z",
        "engagementCount": 1035
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-18T00:00:00.000Z",
        "engagementCount": 1122
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-18T00:00:00.000Z",
        "engagementCount": 2482
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-18T00:00:00.000Z",
        "engagementCount": 1013
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-18T00:00:00.000Z",
        "engagementCount": 2757
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-19T00:00:00.000Z",
        "engagementCount": 735
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-19T00:00:00.000Z",
        "engagementCount": 2015
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-19T00:00:00.000Z",
        "engagementCount": 2608
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-19T00:00:00.000Z",
        "engagementCount": 1640
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-19T00:00:00.000Z",
        "engagementCount": 1192
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-20T00:00:00.000Z",
        "engagementCount": 1677
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-20T00:00:00.000Z",
        "engagementCount": 1919
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-20T00:00:00.000Z",
        "engagementCount": 1587
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-20T00:00:00.000Z",
        "engagementCount": 1114
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-20T00:00:00.000Z",
        "engagementCount": 2936
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-21T00:00:00.000Z",
        "engagementCount": 731
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-21T00:00:00.000Z",
        "engagementCount": 1531
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-21T00:00:00.000Z",
        "engagementCount": 2382
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-21T00:00:00.000Z",
        "engagementCount": 2047
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-21T00:00:00.000Z",
        "engagementCount": 2531
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-22T00:00:00.000Z",
        "engagementCount": 1230
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-22T00:00:00.000Z",
        "engagementCount": 1378
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-22T00:00:00.000Z",
        "engagementCount": 1945
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-22T00:00:00.000Z",
        "engagementCount": 1222
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-22T00:00:00.000Z",
        "engagementCount": 2385
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-23T00:00:00.000Z",
        "engagementCount": 1372
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-23T00:00:00.000Z",
        "engagementCount": 1979
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-23T00:00:00.000Z",
        "engagementCount": 1903
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-23T00:00:00.000Z",
        "engagementCount": 1912
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-23T00:00:00.000Z",
        "engagementCount": 1911
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-24T00:00:00.000Z",
        "engagementCount": 1116
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-24T00:00:00.000Z",
        "engagementCount": 962
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-24T00:00:00.000Z",
        "engagementCount": 1689
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-24T00:00:00.000Z",
        "engagementCount": 1272
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-24T00:00:00.000Z",
        "engagementCount": 1731
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-25T00:00:00.000Z",
        "engagementCount": 1215
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-25T00:00:00.000Z",
        "engagementCount": 1096
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-25T00:00:00.000Z",
        "engagementCount": 1299
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-25T00:00:00.000Z",
        "engagementCount": 1393
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-25T00:00:00.000Z",
        "engagementCount": 3201
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-26T00:00:00.000Z",
        "engagementCount": 1698
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-26T00:00:00.000Z",
        "engagementCount": 1907
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-26T00:00:00.000Z",
        "engagementCount": 2606
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-26T00:00:00.000Z",
        "engagementCount": 1556
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-26T00:00:00.000Z",
        "engagementCount": 1864
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-27T00:00:00.000Z",
        "engagementCount": 1756
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-27T00:00:00.000Z",
        "engagementCount": 2347
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-27T00:00:00.000Z",
        "engagementCount": 962
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-27T00:00:00.000Z",
        "engagementCount": 2137
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-27T00:00:00.000Z",
        "engagementCount": 3038
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-28T00:00:00.000Z",
        "engagementCount": 1523
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-28T00:00:00.000Z",
        "engagementCount": 1220
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-28T00:00:00.000Z",
        "engagementCount": 1570
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-28T00:00:00.000Z",
        "engagementCount": 1662
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-28T00:00:00.000Z",
        "engagementCount": 1436
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-29T00:00:00.000Z",
        "engagementCount": 1371
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-29T00:00:00.000Z",
        "engagementCount": 1236
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-29T00:00:00.000Z",
        "engagementCount": 2437
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-29T00:00:00.000Z",
        "engagementCount": 1179
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-29T00:00:00.000Z",
        "engagementCount": 2366
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-11-30T00:00:00.000Z",
        "engagementCount": 1530
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-11-30T00:00:00.000Z",
        "engagementCount": 1661
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-11-30T00:00:00.000Z",
        "engagementCount": 1999
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-11-30T00:00:00.000Z",
        "engagementCount": 1022
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-11-30T00:00:00.000Z",
        "engagementCount": 2477
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 1462
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 1811
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 1857
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 1896
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 2051
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 1299
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 1035
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 2100
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 2414
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-01T00:00:00.000Z",
        "engagementCount": 1458
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-02T00:00:00.000Z",
        "engagementCount": 723
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-02T00:00:00.000Z",
        "engagementCount": 1397
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-02T00:00:00.000Z",
        "engagementCount": 2230
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-02T00:00:00.000Z",
        "engagementCount": 925
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-02T00:00:00.000Z",
        "engagementCount": 2840
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-03T00:00:00.000Z",
        "engagementCount": 1712
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-03T00:00:00.000Z",
        "engagementCount": 1073
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-03T00:00:00.000Z",
        "engagementCount": 1081
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-03T00:00:00.000Z",
        "engagementCount": 1331
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-03T00:00:00.000Z",
        "engagementCount": 2523
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-04T00:00:00.000Z",
        "engagementCount": 1540
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-04T00:00:00.000Z",
        "engagementCount": 1896
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-04T00:00:00.000Z",
        "engagementCount": 880
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-04T00:00:00.000Z",
        "engagementCount": 1669
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-04T00:00:00.000Z",
        "engagementCount": 2731
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-05T00:00:00.000Z",
        "engagementCount": 965
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-05T00:00:00.000Z",
        "engagementCount": 1356
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-05T00:00:00.000Z",
        "engagementCount": 1637
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-05T00:00:00.000Z",
        "engagementCount": 1622
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-05T00:00:00.000Z",
        "engagementCount": 2630
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-06T00:00:00.000Z",
        "engagementCount": 1480
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-06T00:00:00.000Z",
        "engagementCount": 1364
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-06T00:00:00.000Z",
        "engagementCount": 1449
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-06T00:00:00.000Z",
        "engagementCount": 2206
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-06T00:00:00.000Z",
        "engagementCount": 1626
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-07T00:00:00.000Z",
        "engagementCount": 1098
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-07T00:00:00.000Z",
        "engagementCount": 1606
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-07T00:00:00.000Z",
        "engagementCount": 1121
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-07T00:00:00.000Z",
        "engagementCount": 2179
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-07T00:00:00.000Z",
        "engagementCount": 1740
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-08T00:00:00.000Z",
        "engagementCount": 1169
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-08T00:00:00.000Z",
        "engagementCount": 1553
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-08T00:00:00.000Z",
        "engagementCount": 2115
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-08T00:00:00.000Z",
        "engagementCount": 1599
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-08T00:00:00.000Z",
        "engagementCount": 1035
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-09T00:00:00.000Z",
        "engagementCount": 1058
    },
    {
        "ageGroup":
        {
            "id": 3,
            "description": "30-39"
        },
        "date": "2022-12-09T00:00:00.000Z",
        "engagementCount": 1391
    },
    {
        "ageGroup":
        {
            "id": 4,
            "description": "40-49"
        },
        "date": "2022-12-09T00:00:00.000Z",
        "engagementCount": 2369
    },
    {
        "ageGroup":
        {
            "id": 5,
            "description": "50-59"
        },
        "date": "2022-12-09T00:00:00.000Z",
        "engagementCount": 1833
    },
    {
        "ageGroup":
        {
            "id": 6,
            "description": "60+"
        },
        "date": "2022-12-09T00:00:00.000Z",
        "engagementCount": 985
    },
    {
        "ageGroup":
        {
            "id": 2,
            "description": "18-29"
        },
        "date": "2022-12-10T00:00:00.000Z",
    },
    {
        {
];