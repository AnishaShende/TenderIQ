import React, { useState, useEffect } from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThreeDots } from 'react-loader-spinner';
import ReactSpeedometer from "react-d3-speedometer"
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import d3Pie from 'pie-chart-d3';
import { PieChart } from '@mui/x-charts/PieChart';
// import { desktopOS, valueFormatter } from './webUsageStats';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PuffLoader from "react-spinners/PuffLoader";



import Navbar from './components/Navbar';



const textColor = '#AAA'
function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', width: '100px', height: '100px' }}>
            <CircularProgress variant="determinate" {...props} size={100} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" sx={{ color: 'black', fontSize: '15px' }}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

// CaseSummaries Component
const CaseSummaries = () => {
    const [citation, setCitation] = useState('');
    const [pdfUploaded, setPdfUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [summary, setSummary] = useState('');

    const handleCitationSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate analysis and summary generation
        setTimeout(() => {
            setSummary(`Summary of the case with citation: ${citation}`);
            setLoading(false);
        }, 3000);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPdfUploaded(true);
        }
    };

    const handlePdfSubmit = (e) => {
        e.preventDefault();
        if (!pdfUploaded) return;

        setLoading(true);

        // Simulate analysis and summary generation for PDF
        setTimeout(() => {
            setSummary(`Summary generated for the uploaded PDF.`);
            setLoading(false);
        }, 3000);
    };
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Simulate an AI-generated complexity score
        const timer = setInterval(() => {
            setScore((prevScore) => Math.min(prevScore + 1, 68)); // Example maximum score of 75
        }, 30); // Increase the score over time for animation

        return () => clearInterval(timer);
    }, []);
    // const data = {
    //     "complexityScore": {
    //         "value": 0,
    //         "max": 75,
    //         "description": [
    //             "The complexity score is based on the number of legal issues involved in the case.",
    //             "It considers the variety and number of parties involved, which can increase the case's complexity.",
    //             "Prior case history and rulings may also contribute to the overall complexity score.",
    //             "A higher score indicates a more intricate case that may require more time and resources to resolve.",
    //             "This score can assist lawyers and judges in assessing the case's demands at a glance."
    //         ]
    //     },
    //     "legalCosts": {
    //         "labels": [
    //             "Lawyer Fees",
    //             "Court Costs",
    //             "Other Expenses"
    //         ],
    //         "datasets": [
    //             {
    //                 "label": "Legal Costs",
    //                 "data": [
    //                     3000,
    //                     1500,
    //                     500
    //                 ],
    //                 "backgroundColor": [
    //                     "#4caf50",
    //                     "#2196f3",
    //                     "#ff9800"
    //                 ],
    //                 "hoverOffset": 4,
    //                 "borderWidth": 1,
    //                 "borderColor": "#fff"
    //             }
    //         ]
    //     }
    // }

    const columns = [
        { id: 'name', label: 'Sr. No.', align: 'center', minWidth: 20, maxWidth: 30 },
        { id: 'code', label: 'Lawyer Name', align: 'center', minWidth: 20, maxWidth: 30 },
        {
            id: 'population',
            label: 'Experience (Years)',
            minWidth: 50,
            maxWidth: 60,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'size',
            label: 'Cases Attended',
            minWidth: 70,
            maxWidth: 100,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'density',
            label: 'Fees',
            minWidth: 70,
            maxWidth: 100,
            align: 'center',
            format: (value) => `$${parseFloat(value).toFixed(2)}`,
        },
    ];

    function createData(name, code, population, size, density) {
        return { name, code, population, size, density };
    }

    const rows = [
        createData('1', 'Parth Narkhede', 21, 3, 4000),
        createData('2', 'Sonal Patil', 10, 25, 3500),
        createData('3', 'Aman Sharma', 15, 18, 5000),
        createData('4', 'Ravi Kumar', 12, 30, 4500),
        createData('5', 'Sneha Joshi', 8, 22, 3000),
    ];


    const desktopOS = [
        {
            label: "Lawyer Fees",
            value: 50,
        },
        {
            label: "Jurisdiction Expenses",
            value: 30,
        },
        {
            label: "Other Expenses",
            value: 20,
        },
    ];

    // Value formatter function to display percentage
    const valueFormatter = (item) => `${item.value}%`;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="min-h-screen bg-white-50">
            {/* Navbar */}
            <Navbar />

            <div className="container mx-auto px-6 py-8">
                {/* Title */}
                <h1 className="text-2xl font-bold mb-10 text-gray-800 text-center">Legal Case Insights Overview</h1>
                <div className="mb-9 text-center text-base text-muted-foreground">
                    <p className="px-20 text-center">Get a comprehensive breakdown of your legal case with our advanced data-driven insights. We provide an analysis of the case complexity score, estimated costs, and a tailored list of relevant lawyers. Additionally, our platform calculates the percentage probability of winning, based on case specifics, and offers a detailed timeline of average case duration.</p>
                </div>

                {/* Search Bar and File Upload */}
                <form
                    onSubmit={citation ? handleCitationSubmit : handlePdfSubmit}
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6"
                >
                    {/* Search Input */}
                    <input
                        type="text"
                        className="w-full md:w-2/3 px-5 py-2 border border-gray-700 rounded-full text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter case description..."
                        value={citation}
                        onChange={(e) => setCitation(e.target.value)}
                    />



                    {/* File Upload
                    <label className={`flex items-center justify-center w-40 h-12 border rounded-md cursor-pointer ${pdfUploaded ? 'bg-green-500' : 'bg-black'} text-sm`}>
                        <span className="text-white">Upload PDF</span>
                        <input
                            type="file"
                            className="hidden"
                            accept="application/pdf"
                            onChange={handleFileUpload}
                        />
                    </label> */}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm"
                    >
                        Generate
                    </button>
                </form>

                {/* Loading and Results Section */}
                <div className="mt-8">
                    {loading ? (
                       
                            <div className="flex flex-col items-center justify-center mt-10">
                                <ThreeDots
                                    visible={true}
                                    height="80"
                                    width="80"
                                    color="black"  // Set color of dots to black
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                                <p className="text-gray-600 mt-2">Generating results...</p>
                            </div>
                       
                    ) : summary ? (
                        
                            <div className="min-h-screen bg-gray-100 p-8 rounded-md">
                                {/* <h1 className="text-2xl font-bold mb-6 text-center"></h1> */}
                            <h1 className="text-2xl font-bold mb-6 text-center">Case Complexity Score</h1>

                            <div className="bg-white p-8 pb-11 mx-20 rounded-md shadow-md flex space-x-6">
                                {/* Left Side: Complexity Meter */}
                                <div className="flex-shrink-0 w-1/4 flex flex-col items-center justify-center">
                                    <h2 className="text-md font-semibold mb-4 text-center">Complexity Meter</h2>
                                    <CircularProgressWithLabel value={score} />
                                </div>

                                {/* Right Side: Explanation Points */}
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold mb-2">Complexity Score Explanation</h2>
                                    <ul className="list-disc text-sm list-inside space-y-1 ">
                                        <li>The complexity score is based on the number of legal issues involved in the case.</li>
                                        <li>It considers the variety and number of parties involved, which can increase the case's complexity.</li>
                                        <li>Prior case history and rulings may also contribute to the overall complexity score.</li>
                                        <li>A higher score indicates a more intricate case that may require more time and resources to resolve.</li>
                                        <li>This score can assist lawyers and judges in assessing the case's demands at a glance.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Insights Dashboard */}
                            <div className=" bg-gray-100 p-8">
                                <h1 className="text-2xl font-bold mb-6 text-center">Insights Dashboard</h1>

                                <div className="flex justify-between space-x-6">
                                    {/* Speedometer 1 */}
                                    <div className="relative flex flex-col items-center bg-white rounded-lg shadow-lg pt-8 px-6 pb-8 w-1/3">
                                        <ReactSpeedometer
                                            value={18}
                                            needleColor="steelblue"
                                            needleTransitionDuration={4000}
                                            needleTransition="easeElastic"
                                            currentValueText="Current Duration: 18 months"
                                            textColor={textColor}
                                            maxValue={24}
                                            customSegmentStops={[0, 3, 6, 12, 24]}
                                            segmentColors={['#ffcc00', '#6fa3ef', '#ab83ff', '#2ecc71']}
                                        />
                                        <h2 className="absolute bottom-24 text-lg font-semibold mt-2">Analysis of Case Duration</h2>
                                        <p className="absolute bottom-10 text-center">Estimated time to resolve the case at checkpoints: 3, 6, 12, and 24 months.</p>
                                    </div>

                                    {/* Speedometer 2 */}
                                    <div className="relative flex flex-col items-center bg-white rounded-lg shadow-lg pt-8 px-6 pb-8 w-1/3">
                                        <ReactSpeedometer
                                            value={42}
                                            needleColor="steelblue"
                                            needleTransitionDuration={4000}
                                            needleTransition="easeElastic"
                                            currentValueText="Avg. Resolution Time: 42 months"
                                            textColor={textColor}
                                            maxValue={60}
                                            customSegmentStops={[0, 3, 6, 12, 36, 60]}
                                            segmentColors={['#ff6f61', '#6fa3ef', '#ab83ff', '#ffcc00', '#2ecc71']}
                                        />
                                        <h2 className="absolute bottom-24 text-lg font-semibold mt-2">Average Time to Resolve Specific Type</h2>
                                        <p className="absolute bottom-10 text-center">Estimated resolution time at key intervals: 3 months, 6 months, 1 year, 3 years, 5 years.</p>
                                    </div>

                                    {/* Speedometer 3 */}
                                    <div className="relative flex flex-col items-center bg-white rounded-lg shadow-lg pt-8 px-6 pb-8 w-1/3">
                                        <ReactSpeedometer
                                            forceRender={true}
                                            value={46}
                                            maxValue={100}
                                            needleColor="steelblue"
                                            needleTransitionDuration={3000}
                                            needleTransition="easeElastic"
                                            customSegmentStops={[0, 50, 100]}
                                            segmentColors={['#ff6f61', '#6fa3ef']}
                                            currentValueText="Success Rate: 46%"
                                            textColor={textColor}
                                        />
                                        <h2 className="absolute bottom-24 text-lg font-semibold mt-2">Success Rate for Specific Case Type</h2>
                                        <p className="absolute bottom-10 text-center">Needle fluctuates between Plaintiff (0-50%) and Defendant (50-100%)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Pie Chart */}
                            <div className=" bg-gray-100 px-8 py-2">
                                <div className="bg-white p-6 rounded-md shadow-md">
                                    {/* Heading and Description */}
                                    <h2 className="text-2xl font-bold mb-4 text-center">Expense Distribution</h2>
                                    <p className="mb-4 text-center">
                                        This chart represents the distribution of expenses for the case, categorized into lawyer fees, jurisdiction expenses, and other expenses.
                                    </p>

                                    {/* Pie Chart */}
                                    <PieChart
                                        series={[
                                            {
                                                data: desktopOS,
                                                highlightScope: { fade: "global", highlight: "item" },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                                valueFormatter,
                                            },
                                        ]}
                                        height={200}
                                    />

                                    {/* Labels for the colors (legend) */}
                                    {/* <div className="flex justify-center mt-6">
                        <div className="text-center mx-4">
                            <div className="h-4 w-4 inline-block bg-blue-500 mr-2"></div>
                            <span>Lawyer Fees</span>
                        </div>
                        <div className="text-center mx-4">
                            <div className="h-4 w-4 inline-block bg-green-500 mr-2"></div>
                            <span>Jurisdiction Expenses</span>
                        </div>
                        <div className="text-center mx-4">
                            <div className="h-4 w-4 inline-block bg-red-500 mr-2"></div>
                            <span>Other Expenses</span>
                        </div>
                    </div> */}
                                </div>
                            </div>


                            {/* Total Lawyer Expenditure Table */}
                            <div className="flex justify-center px-10 py-4">
                                <Paper
                                    sx={{
                                        width: '95%',
                                        overflow: 'hidden',
                                        borderRadius: '15px',
                                        boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <div style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#f0f4f8' }}>
                                        <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
                                            Case Relevant Lawyers Overview
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            This table displays the summary of lawyer fees, experience, and the number of cases attended to get an idea about the success rate.
                                        </Typography>
                                    </div>

                                    <TableContainer sx={{ maxHeight: 440 }}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{
                                                                minWidth: column.minWidth,
                                                                maxWidth: column.maxWidth,
                                                                fontWeight: 'bold',
                                                                fontSize: '14px',
                                                                whiteSpace: 'normal',
                                                                wordWrap: 'break-word',
                                                                backgroundColor: '#D3D3D3',
                                                                color: '#000000',
                                                                padding: '6px',
                                                            }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                                    <TableRow
                                                        hover
                                                        role="checkbox"
                                                        tabIndex={-1}
                                                        key={row.code}
                                                        sx={{
                                                            '&:hover': {
                                                                backgroundColor: '#f1f3f5',
                                                            },
                                                        }}
                                                    >
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    align={column.align}
                                                                    style={{ padding: '6px', fontSize: '13px' }}
                                                                >
                                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center text-sm"></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseSummaries;
