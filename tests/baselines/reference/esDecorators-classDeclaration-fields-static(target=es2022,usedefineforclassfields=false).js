//// [tests/cases/conformance/esDecorators/classDeclaration/fields/esDecorators-classDeclaration-fields-static.ts] ////

//// [esDecorators-classDeclaration-fields-static.ts]
declare let dec: any;

const field3 = "field3";

class C {
    @dec(1) static field1 = 1;
    @dec(2) static ["field2"] = 2;
    @dec(3) static [field3] = 3;
}


//// [esDecorators-classDeclaration-fields-static.js]
const field3 = "field3";
let C = (() => {
    var _a;
    let _staticExtraInitializers = [];
    let _static_field1_decorators;
    let _static_field1_initializers = [];
    let _static_member_decorators;
    let _static_member_initializers = [];
    let _static_member_decorators_1;
    let _static_member_initializers_1 = [];
    return class C {
        static { _static_field1_decorators = [dec(1)], _static_member_decorators = [dec(2)], _static_member_decorators_1 = [dec(3)], _a = __propKey(field3); }
        static {
            __esDecorate(null, null, _static_field1_decorators, { kind: "field", name: "field1", static: true, private: false, access: { has: obj => "field1" in obj, get: obj => obj.field1, set: (obj, value) => { obj.field1 = value; } } }, _static_field1_initializers, _staticExtraInitializers);
            __esDecorate(null, null, _static_member_decorators, { kind: "field", name: "field2", static: true, private: false, access: { has: obj => "field2" in obj, get: obj => obj["field2"], set: (obj, value) => { obj["field2"] = value; } } }, _static_member_initializers, _staticExtraInitializers);
            __esDecorate(null, null, _static_member_decorators_1, { kind: "field", name: _a, static: true, private: false, access: { has: obj => _a in obj, get: obj => obj[_a], set: (obj, value) => { obj[_a] = value; } } }, _static_member_initializers_1, _staticExtraInitializers);
            __runInitializers(this, _staticExtraInitializers);
        }
        static { this.field1 = __runInitializers(this, _static_field1_initializers, 1); }
        static { this["field2"] = __runInitializers(this, _static_member_initializers, 2); }
        static { this[_a] = __runInitializers(this, _static_member_initializers_1, 3); }
    };
})();
