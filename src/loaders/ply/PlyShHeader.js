export class PlyShHeader {
    // 필드당 4 byte : float 32
    static SH_HEADERS = {
        1: ['f_rest_0', 'f_rest_1', 'f_rest_2', 'f_rest_3', 'f_rest_4', 'f_rest_5', 'f_rest_6', 'f_rest_7', 'f_rest_8'],
        2: ['f_rest_0', 'f_rest_1', 'f_rest_2', 'f_rest_3', 'f_rest_4', 'f_rest_5', 'f_rest_6', 'f_rest_7', 'f_rest_8', 'f_rest_9',
            'f_rest_10', 'f_rest_11', 'f_rest_12', 'f_rest_13', 'f_rest_14', 'f_rest_15', 'f_rest_16', 'f_rest_17', 'f_rest_18', 'f_rest_19',
            'f_rest_20', 'f_rest_21', 'f_rest_22', 'f_rest_23'],
        3: [
            'f_rest_0', 'f_rest_1', 'f_rest_2', 'f_rest_3', 'f_rest_4', 'f_rest_5', 'f_rest_6', 'f_rest_7', 'f_rest_8', 'f_rest_9',
            'f_rest_10', 'f_rest_11', 'f_rest_12', 'f_rest_13', 'f_rest_14', 'f_rest_15', 'f_rest_16', 'f_rest_17', 'f_rest_18', 'f_rest_19',
            'f_rest_20', 'f_rest_21', 'f_rest_22', 'f_rest_23', 'f_rest_24', 'f_rest_25', 'f_rest_26', 'f_rest_27', 'f_rest_28', 'f_rest_29',
            'f_rest_30', 'f_rest_31', 'f_rest_32', 'f_rest_33', 'f_rest_34', 'f_rest_35', 'f_rest_36', 'f_rest_37', 'f_rest_38', 'f_rest_39',
            'f_rest_40', 'f_rest_41', 'f_rest_42', 'f_rest_43', 'f_rest_44'
        ]
    };

    static setShDegree(shDegree) {
        this.shDegree = shDegree;
    }

    static getShDegree() {
        return this.shDegree;
    }

    static getSHHeaders() {
        return PlyShHeader.SH_HEADERS[this.shDegree];
    }

    static getSize() {
        return this.getSHHeaders().length;
    }

    static getSHPerSplat() {
        // 15 = sh_degree 3 depth.
        // shData(rgb + alpha dummy) * 15 = 4 * 15 = 60
        // SH_HEADERS(45) / 3 * 4 = 15 * 4 = 60
        return this.getSHHeaders().length / 3 * 4;
    }

    static getSizeOfBytes() {
        return this.getSHHeaders().length * 4;
    }

    static getSHColorPerTexel() {
        return 4;
    }
}
