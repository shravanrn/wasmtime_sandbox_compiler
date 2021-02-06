(function() {var implementors = {};
implementors["cranelift_bforest"] = [{"text":"impl&lt;K, V&gt; Default for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Copy,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K&gt; Default for Set&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Copy,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["cranelift_codegen"] = [{"text":"impl Default for NullRelocSink","synthetic":false,"types":[]},{"text":"impl Default for NullTrapSink","synthetic":false,"types":[]},{"text":"impl Default for ConstantData","synthetic":false,"types":[]},{"text":"impl Default for ExternalName","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Default for DisplayFunctionAnnotations&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Default for VariableArgs","synthetic":false,"types":[]},{"text":"impl Default for SourceLoc","synthetic":false,"types":[]},{"text":"impl Default for StackSlots","synthetic":false,"types":[]},{"text":"impl Default for Type","synthetic":false,"types":[]},{"text":"impl Default for ValueLoc","synthetic":false,"types":[]},{"text":"impl Default for ArgumentLoc","synthetic":false,"types":[]},{"text":"impl Default for Encoding","synthetic":false,"types":[]},{"text":"impl Default for BackendVariant","synthetic":false,"types":[]},{"text":"impl Default for VCodeConstants","synthetic":false,"types":[]},{"text":"impl Default for MachLabel","synthetic":false,"types":[]},{"text":"impl Default for PassTimes","synthetic":false,"types":[]},{"text":"impl Default for VerifierErrors","synthetic":false,"types":[]}];
implementors["cranelift_codegen_meta"] = [{"text":"impl Default for RecipePrefixKind","synthetic":false,"types":[]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;T:&nbsp;ReservedValue&gt; Default for PackedOption&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;EntityRef + ReservedValue&gt; Default for EntityList&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Default for SecondaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Default for PrimaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["cranelift_frontend"] = [{"text":"impl Default for Switch","synthetic":false,"types":[]}];
implementors["cranelift_interpreter"] = [{"text":"impl&lt;'a&gt; Default for FunctionStore&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Default for InterpreterState&lt;'_&gt;","synthetic":false,"types":[]}];
implementors["cranelift_module"] = [{"text":"impl Default for ModuleDeclarations","synthetic":false,"types":[]}];
implementors["cranelift_reader"] = [{"text":"impl Default for Location","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Default for ParseOptions&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Default for SourceMap","synthetic":false,"types":[]}];
implementors["lightbeam"] = [{"text":"impl Default for TranslatedModule","synthetic":false,"types":[]}];
implementors["peepmatic_runtime"] = [{"text":"impl Default for IntegerInterner","synthetic":false,"types":[]}];
implementors["peepmatic_test"] = [{"text":"impl Default for Program","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Default for TokenStream","synthetic":false,"types":[]}];
implementors["serde"] = [{"text":"impl Default for IgnoredAny","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Default for Underscore","synthetic":false,"types":[]},{"text":"impl Default for Abstract","synthetic":false,"types":[]},{"text":"impl Default for As","synthetic":false,"types":[]},{"text":"impl Default for Async","synthetic":false,"types":[]},{"text":"impl Default for Auto","synthetic":false,"types":[]},{"text":"impl Default for Await","synthetic":false,"types":[]},{"text":"impl Default for Become","synthetic":false,"types":[]},{"text":"impl Default for Box","synthetic":false,"types":[]},{"text":"impl Default for Break","synthetic":false,"types":[]},{"text":"impl Default for Const","synthetic":false,"types":[]},{"text":"impl Default for Continue","synthetic":false,"types":[]},{"text":"impl Default for Crate","synthetic":false,"types":[]},{"text":"impl Default for Default","synthetic":false,"types":[]},{"text":"impl Default for Do","synthetic":false,"types":[]},{"text":"impl Default for Dyn","synthetic":false,"types":[]},{"text":"impl Default for Else","synthetic":false,"types":[]},{"text":"impl Default for Enum","synthetic":false,"types":[]},{"text":"impl Default for Extern","synthetic":false,"types":[]},{"text":"impl Default for Final","synthetic":false,"types":[]},{"text":"impl Default for Fn","synthetic":false,"types":[]},{"text":"impl Default for For","synthetic":false,"types":[]},{"text":"impl Default for If","synthetic":false,"types":[]},{"text":"impl Default for Impl","synthetic":false,"types":[]},{"text":"impl Default for In","synthetic":false,"types":[]},{"text":"impl Default for Let","synthetic":false,"types":[]},{"text":"impl Default for Loop","synthetic":false,"types":[]},{"text":"impl Default for Macro","synthetic":false,"types":[]},{"text":"impl Default for Match","synthetic":false,"types":[]},{"text":"impl Default for Mod","synthetic":false,"types":[]},{"text":"impl Default for Move","synthetic":false,"types":[]},{"text":"impl Default for Mut","synthetic":false,"types":[]},{"text":"impl Default for Override","synthetic":false,"types":[]},{"text":"impl Default for Priv","synthetic":false,"types":[]},{"text":"impl Default for Pub","synthetic":false,"types":[]},{"text":"impl Default for Ref","synthetic":false,"types":[]},{"text":"impl Default for Return","synthetic":false,"types":[]},{"text":"impl Default for SelfType","synthetic":false,"types":[]},{"text":"impl Default for SelfValue","synthetic":false,"types":[]},{"text":"impl Default for Static","synthetic":false,"types":[]},{"text":"impl Default for Struct","synthetic":false,"types":[]},{"text":"impl Default for Super","synthetic":false,"types":[]},{"text":"impl Default for Trait","synthetic":false,"types":[]},{"text":"impl Default for Try","synthetic":false,"types":[]},{"text":"impl Default for Type","synthetic":false,"types":[]},{"text":"impl Default for Typeof","synthetic":false,"types":[]},{"text":"impl Default for Union","synthetic":false,"types":[]},{"text":"impl Default for Unsafe","synthetic":false,"types":[]},{"text":"impl Default for Unsized","synthetic":false,"types":[]},{"text":"impl Default for Use","synthetic":false,"types":[]},{"text":"impl Default for Virtual","synthetic":false,"types":[]},{"text":"impl Default for Where","synthetic":false,"types":[]},{"text":"impl Default for While","synthetic":false,"types":[]},{"text":"impl Default for Yield","synthetic":false,"types":[]},{"text":"impl Default for Add","synthetic":false,"types":[]},{"text":"impl Default for AddEq","synthetic":false,"types":[]},{"text":"impl Default for And","synthetic":false,"types":[]},{"text":"impl Default for AndAnd","synthetic":false,"types":[]},{"text":"impl Default for AndEq","synthetic":false,"types":[]},{"text":"impl Default for At","synthetic":false,"types":[]},{"text":"impl Default for Bang","synthetic":false,"types":[]},{"text":"impl Default for Caret","synthetic":false,"types":[]},{"text":"impl Default for CaretEq","synthetic":false,"types":[]},{"text":"impl Default for Colon","synthetic":false,"types":[]},{"text":"impl Default for Colon2","synthetic":false,"types":[]},{"text":"impl Default for Comma","synthetic":false,"types":[]},{"text":"impl Default for Div","synthetic":false,"types":[]},{"text":"impl Default for DivEq","synthetic":false,"types":[]},{"text":"impl Default for Dollar","synthetic":false,"types":[]},{"text":"impl Default for Dot","synthetic":false,"types":[]},{"text":"impl Default for Dot2","synthetic":false,"types":[]},{"text":"impl Default for Dot3","synthetic":false,"types":[]},{"text":"impl Default for DotDotEq","synthetic":false,"types":[]},{"text":"impl Default for Eq","synthetic":false,"types":[]},{"text":"impl Default for EqEq","synthetic":false,"types":[]},{"text":"impl Default for Ge","synthetic":false,"types":[]},{"text":"impl Default for Gt","synthetic":false,"types":[]},{"text":"impl Default for Le","synthetic":false,"types":[]},{"text":"impl Default for Lt","synthetic":false,"types":[]},{"text":"impl Default for MulEq","synthetic":false,"types":[]},{"text":"impl Default for Ne","synthetic":false,"types":[]},{"text":"impl Default for Or","synthetic":false,"types":[]},{"text":"impl Default for OrEq","synthetic":false,"types":[]},{"text":"impl Default for OrOr","synthetic":false,"types":[]},{"text":"impl Default for Pound","synthetic":false,"types":[]},{"text":"impl Default for Question","synthetic":false,"types":[]},{"text":"impl Default for RArrow","synthetic":false,"types":[]},{"text":"impl Default for LArrow","synthetic":false,"types":[]},{"text":"impl Default for Rem","synthetic":false,"types":[]},{"text":"impl Default for RemEq","synthetic":false,"types":[]},{"text":"impl Default for FatArrow","synthetic":false,"types":[]},{"text":"impl Default for Semi","synthetic":false,"types":[]},{"text":"impl Default for Shl","synthetic":false,"types":[]},{"text":"impl Default for ShlEq","synthetic":false,"types":[]},{"text":"impl Default for Shr","synthetic":false,"types":[]},{"text":"impl Default for ShrEq","synthetic":false,"types":[]},{"text":"impl Default for Star","synthetic":false,"types":[]},{"text":"impl Default for Sub","synthetic":false,"types":[]},{"text":"impl Default for SubEq","synthetic":false,"types":[]},{"text":"impl Default for Tilde","synthetic":false,"types":[]},{"text":"impl Default for Brace","synthetic":false,"types":[]},{"text":"impl Default for Bracket","synthetic":false,"types":[]},{"text":"impl Default for Paren","synthetic":false,"types":[]},{"text":"impl Default for Group","synthetic":false,"types":[]},{"text":"impl Default for Generics","synthetic":false,"types":[]},{"text":"impl Default for BoundLifetimes","synthetic":false,"types":[]},{"text":"impl Default for PathArguments","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; Default for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
implementors["wasmtime"] = [{"text":"impl Default for Config","synthetic":false,"types":[]},{"text":"impl Default for Engine","synthetic":false,"types":[]},{"text":"impl Default for Store","synthetic":false,"types":[]}];
implementors["wasmtime_cranelift"] = [{"text":"impl Default for Cranelift","synthetic":false,"types":[]}];
implementors["wasmtime_environ"] = [{"text":"impl Default for FunctionAddressMap","synthetic":false,"types":[]},{"text":"impl Default for CompiledFunction","synthetic":false,"types":[]},{"text":"impl Default for Module","synthetic":false,"types":[]},{"text":"impl Default for TypeTables","synthetic":false,"types":[]},{"text":"impl Default for InstanceSignature","synthetic":false,"types":[]},{"text":"impl&lt;'data&gt; Default for ModuleTranslation&lt;'data&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Default for DebugInfoData&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Default for NameSection&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Default for WasmFileInfo","synthetic":false,"types":[]},{"text":"impl Default for Tunables","synthetic":false,"types":[]}];
implementors["wasmtime_fuzzing"] = [{"text":"impl Default for DifferentialWasmiModuleConfig","synthetic":false,"types":[]}];
implementors["wasmtime_jit"] = [{"text":"impl Default for TrampolineRelocSink","synthetic":false,"types":[]}];
implementors["wasmtime_profiling"] = [{"text":"impl Default for NullProfilerAgent","synthetic":false,"types":[]}];
implementors["wasmtime_runtime"] = [{"text":"impl Default for StackMapRegistry","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Default for Imports&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Default for VMSharedSignatureIndex","synthetic":false,"types":[]},{"text":"impl Default for VMInterrupts","synthetic":false,"types":[]}];
implementors["wiggle_generate"] = [{"text":"impl Default for Paths","synthetic":false,"types":[]},{"text":"impl Default for ErrorConf","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()