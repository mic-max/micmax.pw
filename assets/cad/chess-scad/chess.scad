$fn = 48import("C:/Git/micmax.pw/assets/cad/chess-scad/out/pawn.stl");
;

module hollow(h, r, i = 0, cur_h = 0) {
    if (i < len(h)) {        
        translate([0, 0, cur_h])
        cylinder(h[i], r[i], r[i + 1]);
        hollow(h, r, i + 1, cur_h + h[i]);
    }
}

module king_hollow() hollow([50, 54, 72, 115], [80, 45, 29, 22, 22]);
module queen_hollow() hollow([45, 54, 50, 68, 21], [82, 49, 30, 24, 24, 1]);
module rook_hollow() hollow([56, 49, 49, 17], [64, 33, 28, 28, 1]);
module bishop_hollow() hollow([47, 50, 68, 26], [65, 33, 17, 17, 1]);
module knight_hollow() hollow([34, 58, 28, 10], [65, 48, 25, 15, 1]);
module pawn_hollow() hollow([33, 40, 79, 11], [49, 28, 13, 12, 1]);

// 100% 345
module king() {
    difference() {
        translate([0, 0, 275.5])
        union() {
            // Base
            rotate_extrude()
            import("dxf/king.dxf");
            
            // Cross
            translate([-25, 10, 42])
            rotate([90, 0, 0])
            linear_extrude(height = 20)
            import("dxf/king_cross.dxf");
        }
        
        // Hollow
        king_hollow();
    }
}

// 89% 325 vs 307 = 106%
module queen() {
    difference() {        
        translate([0, 0, 216])
        union() {
            // Base
            rotate_extrude()
            import("dxf/queen.dxf");

            // Crown
            translate([0, 0, 28]) 
            scale(7.2)
            import("stl/queen_crown.stl");
        }
        
        // Hollow
        queen_hollow();
    }
}

// 58% 190 vs 200 = 95%
module rook() {
    translate([0, 0, 161])
    difference() {
        // Base
        rotate_extrude()
        import("dxf/rook.dxf");

        // Cutouts
        translate([0, 0, 20])
        for (i = [0:90:270]) {
            rotate([0, 0, i])
            linear_extrude(height = 10)
            polygon([[0, 0], [60, 30], [30, 60]]);
        }
        
        // Hollow
        translate([0, 0, -161])
        rook_hollow();
    }
}

// 74% 250 vs 255 = 98%
module bishop() {
    translate([0, 0, 221.5])
    difference() {
        // Base
        rotate_extrude()
        import("dxf/bishop.dxf");
        
        // Slice
        translate([-30, 0, 5])
        rotate([0, -45, 0])
        cube([10, 80, 50], center = true);
        
        // Hollow
        translate([0, 0, -222.5])
        bishop_hollow();
    }
}

// 63% 240 vs 217 = 111%
module knight() {
    translate([0, 0, 30])
    difference() {
        union() {
            // Base
            rotate_extrude()
            import("dxf/knight.dxf");
            
            // Head
            translate([-8, -12, 28])
            scale(3.2)
            import("stl/knight_head.stl");
            
            // Head Support
            translate([10 , 0, 100])
            rotate([0, 35, 0])
            cube([60, 10, 50], center = true);
        }
        
        // Hollow
        translate([0, 0, -30])
        knight_hollow();
    }
}

// 53% 170 vs 183 = 93%
module pawn() {
    translate([0, 0, 141])
    difference() {
        // Base
        rotate_extrude()
        import("dxf/pawn.dxf");
        
        // Hollow
        translate([0, 0, -141.2])
        pawn_hollow();
    }
}

// Chess Pieces
king();
translate([200, 0, 0]) queen();
translate([400, 0, 0]) bishop();
translate([600, 0, 0]) rotate([0, 0, 180]) knight();
translate([800, 0, 0]) rook();
translate([0, -200, 0]) pawn();
!translate([0, -200, 0]) pawn_hollow();

// Mould

rotate([0, 180, 0])
difference() {
    translate([0, -100, 0])
    cube([1200, 200, 300]);
    
    translate([100, 0, -1])
    king_hollow();
    
    translate([300, 0, -1])
    queen_hollow();
    
    translate([500, 0, -1])
    bishop_hollow();
    
    translate([700, 0, -1])
    knight_hollow();
    
    translate([900, 0, -1])
    rook_hollow();
    
    translate([1100, 0, -1])
    pawn_hollow();
}