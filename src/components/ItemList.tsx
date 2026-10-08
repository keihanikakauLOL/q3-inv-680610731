import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

export function ItemList() {
  const { inventory } = useItemStore();
  const deleteInventoryItem = useItemStore((state) => state.deleteInventoryItem);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
              <TableHead className="text-right">Total Value</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-muted-foreground py-6"
                >
                  No products in stock yet.
                </TableCell>
              </TableRow>
            ) : (
              inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  
                  {/* 1. แสดงจำนวนสินค้าแบบมีคอมมาคั่น */}
                  <TableCell className="text-right">
                    {Number(item.quantity).toLocaleString()}
                  </TableCell>
                  
                  {/* 2. แสดงราคาต่อชิ้น มีคอมมา และทศนิยม 2 ตำแหน่ง */}
                  <TableCell className="text-right">
                    ฿{Number(item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                  
                  {/* 3. แสดงราคารวม มีคอมมา และทศนิยม 2 ตำแหน่ง */}
                  <TableCell className="text-right font-semibold">
                    ฿{(item.quantity * item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </TableCell>
                  
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="destructive" className="rounded-full gap-2 hover:bg-red-500 hover:text-white transition-colors"
                      onClick={() => deleteInventoryItem(item.id)}>
                      <Trash className="h-4 w-4" />
                      <span>Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
