"use client"
import React from 'react';

const DaywiseBreakdown = () => {
    const months = [
        {
            month: 'Jan 25', value: 2063.10, days: [
                null, null, null, null,
                { value: 0 }, { value: 100 }, { value: -50 },
                { value: 200 }, { value: 300 }, { value: -100 },
                { value: -200 }, null, null, null, null, null
            ]
        },
        { month: 'Feb 25', value: 0.00, days: Array(28).fill({ value: null }) },
        { month: 'Mar 25', value: 0.00, days: Array(31).fill({ value: null }) },
        { month: 'Apr 25', value: 0.00, days: Array(30).fill({ value: null }) },
        { month: 'May 25', value: 0.00, days: Array(31).fill({ value: null }) },
        { month: 'June 25', value: 0.00, days: Array(30).fill({ value: null }) },
        { month: 'July 25', value: 0.00, days: Array(31).fill({ value: null }) },
        { month: 'Aug 25', value: 0.00, days: Array(30).fill({ value: null }) },
        { month: 'Sep 25', value: 0.00, days: Array(31).fill({ value: null }) },
        { month: 'Oct 25', value: 0.00, days: Array(31).fill({ value: null }) },
        { month: 'Nov 25', value: 0.00, days: Array(30).fill({ value: null }) },
        { month: 'Dec 25', value: 0.00, days: Array(31).fill({ value: null }) },
    ];

    const getSquareColor = (value) => {
        if (value === null) return 'bg-gray-100';
        if (value > 0) return 'bg-green-500';
        if (value < 0) return 'bg-red-500';
        return 'bg-gray-200';
    };

    return (
        <div>
            <h3 className="font-semibold text-gray-600 text-sm p-4 ">Daywise Breakdown</h3>

            <div className="flex flex-nowrap border rounded-lg p-4 overflow-x-auto gap-4 pb-4 custom-scrollbar">
                {months.map((month, monthIndex) => (
                    <div key={monthIndex} className="flex-none">
                        {/* Grid of squares */}
                        <div className="grid grid-cols-7 gap-0.5 mb-2">
                            {month.days.map((day, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={`w-4 h-4 ${getSquareColor(day?.value)} rounded-sm`}
                                />
                            ))}
                        </div>

                        {/* Month label and value */}
                        <div className="text-xs">
                            <div className="font-medium">{month.month}</div>
                            <div className={`${month.value > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {month.value.toFixed(2)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DaywiseBreakdown;