import Papa from "papaparse";
import { useEffect, useState } from "react"

type DataType = {
    id: string;
    task: string;
    status: string;
    description: string;
    priority: string;
}[]

export function useCsv() {
    const [dataCSV, setDataCSV] = useState<DataType>([]);
    useEffect(() => {
        async function loadCSV() {
            try {
                const response = await fetch("data/tasks.csv");
                if (!response.ok) throw new Error("Erro ao carregar o CSV");

                const text = await response.text();

                Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result: any) => {
                        console.log(result.data)
                        setDataCSV(result.data);
                    },
                });
            } catch (error) {
                console.error("Erro ao carregar CSV:", error);
            }
        }

        loadCSV();
    });


    return {
        dataCSV,
        setDataCSV
    }
}